import AsyncStorage from '@react-native-async-storage/async-storage';
import { Middleware, Tuple, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import mainSaga from '../sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AppSettings'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
// Mount it on the Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewaresDefault = getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    });

    const middlewareTuple = [...middlewaresDefault, ...middlewares] as Tuple<
      Middleware[]
    >;
    return middlewareTuple;
  },
});

// Then run the saga
sagaMiddleware.run(mainSaga);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export default persistor;
