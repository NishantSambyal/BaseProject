import Route from '@navigation/index';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            ...DefaultTheme.colors,
            // background: '#fff',
          },
        }}>
        <Route />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
