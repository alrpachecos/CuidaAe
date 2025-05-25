import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen} from '../screens/Auth/LoginScreen';
import {ForgotPasswordScreen} from '../screens/Auth/ForgotPasswordScreen';
import {RegisterScreen} from '../screens/Auth/RegisterScreen';
export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};
