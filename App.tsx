/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login/login.screen';
import Home from './src/screens/home/home.screen';
import { ThemeProvider } from 'styled-components/native';
import { BaseTheme } from '@assets/theme/app-theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={BaseTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
