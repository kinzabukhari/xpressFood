import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, WelcomeScreen,HomeScreen, MapScreen} from '../screens';
import BottomTabsNavigator from './BottomTabsNavigator';
import DrawerNavigator from './DrawerNavigator';

const AuthStack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      {/* <AuthStack.Screen
        name="Welcome Screen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <AuthStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
