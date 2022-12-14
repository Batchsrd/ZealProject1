/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

const App: () => Node = () => {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
