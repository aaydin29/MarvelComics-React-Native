import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './pages/AuthPages/Login';
import Sign from './pages/AuthPages/Sign';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthPages = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthPages" component={AuthPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
