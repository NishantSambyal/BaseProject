import Route from '@navigation/index';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
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
  );
};

export default App;
