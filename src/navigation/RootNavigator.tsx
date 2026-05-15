// navigation/RootNavigator.tsx

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTab from './BottomTab';
import LoginScreen from '../screens/auth/LoginScreen';


export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  EventDetail: {event: any};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Main"
        component={BottomTab}
      />

    </Stack.Navigator>
  );
};

export default RootNavigator;