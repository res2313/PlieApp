import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomTab';


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default AppNavigator;
