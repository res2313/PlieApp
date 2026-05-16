import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../contants/colors';
import SPACING from '../contants/spacing';
import EventListScreen from '../screens/home/EventListScreen';
import FavouriteScreen from '../screens/favorite/FavouriteScreen';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textGray,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'EventListScreen') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Search"
        component={EventListScreen}
        options={{
          tabBarLabel: 'Search',
        }}
      />

      <Tab.Screen
        name="EventListScreen"
        component={EventListScreen}
        options={{
          tabBarLabel: 'Events',
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Favourites',
        }}
      />

      <Tab.Screen
        name="Profile"
        component={EventListScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingBottom: SPACING.md,
    paddingTop: SPACING.xs,
    height: 70,
  },

  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
    marginBottom: 10,
  },
});
