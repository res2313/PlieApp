import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/auth/LoginScreen';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Login" component={LoginScreen} />
      {/* <Tab.Screen name="Events" component={EventListScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;
