import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabsNavigator from './BottomTabsNavigator';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import {
  BusinessConsoleScreen,
  DriverConsoleScreen,
  HelpScreen,
  PaymentScreen,
  PromotionsScreen,
  SettingsScreen,
} from '../screens';
import {DrawerContent} from '../components';
import {View} from 'react-native';

const DrawerTabs = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerTabs.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <DrawerTabs.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
        options={{
          title: 'Client',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <DrawerTabs.Screen
        name="BusinessConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: 'Business',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material"
              name="business"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <DrawerTabs.Screen
        name="DriverConsoleScreen"
        component={DriverConsoleScreen}
        options={{
          title: 'Driver Console',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <DrawerTabs.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          title: 'Payment',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <DrawerTabs.Screen
        name="PromotionsScreen"
        component={PromotionsScreen}
        options={{
          title: 'Promotions',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material"
              name="local-offer"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <DrawerTabs.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material"
              name="settings"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <DrawerTabs.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          title: 'Help',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material"
              name="help"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </DrawerTabs.Navigator>
  );
};

export default DrawerNavigator;
