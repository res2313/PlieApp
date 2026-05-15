
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '../contants/colors';
import EventListScreen from '../screens/home/EventListScreen';
import SPACING from '../contants/spacing';



const Tab = createBottomTabNavigator();

// Simple emoji/unicode icon helper — swap with react-native-vector-icons if preferred
const TabIcon = ({icon, focused}: {icon: string; focused: boolean}) => (
  <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>{icon}</Text>
);

const BottomTab = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.textGray,
      tabBarStyle: styles.tabBar,
      tabBarLabelStyle: styles.tabLabel,
    }}>
    <Tab.Screen
      name="Search"
      component={EventListScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({focused}) => <TabIcon icon="🔍" focused={focused} />,
      }}
    />
    <Tab.Screen
      name="Events"
      component={EventListScreen}
      options={{
        tabBarLabel: 'Events',
        tabBarIcon: ({focused}) => <TabIcon icon="📅" focused={focused} />,
      }}
    />
    <Tab.Screen
      name="Favourites"
      component={EventListScreen}
      options={{
        tabBarLabel: 'Favourites',
        tabBarIcon: ({focused}) => <TabIcon icon="♡" focused={focused} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={EventListScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({focused}) => <TabIcon icon="👤" focused={focused} />,
      }}
    />
  </Tab.Navigator>
);

export default BottomTab;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingBottom: SPACING.sm,
    paddingTop: SPACING.xs,
    height: 60,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
  },
  tabIcon: {
    fontSize: 20,
    opacity: 0.5,
  },
  tabIconActive: {
    opacity: 1,
  },
});
