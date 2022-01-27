import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  MyAccountScreen,
  MyOrdersScreen,
  SearchScreen,
} from '../screens';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';

const BottomTabs = createBottomTabNavigator();
const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator tabBarOptions={{activeTintColor: colors.primary}}>
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="list" type="material" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="person"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator;
