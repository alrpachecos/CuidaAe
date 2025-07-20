import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { User } from '../sharedTypes/AuthenticationTypes';

import { PatientNavigator } from './PatientNavigator';
import { ProfessionalNavigator } from './ProfessionalNavigator';

export type RootStackParamList = {
  ProfessionalNavigator: undefined;
  PatientNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

interface RoleBasedNavigatorProps {
  user: User;
}

export const RoleBasedNavigator: React.FC<RoleBasedNavigatorProps> = ({
  user,
}) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user.role === 'professional' ? (
        <Stack.Screen
          name="ProfessionalNavigator"
          component={ProfessionalNavigator}
        />
      ) : (
        <Stack.Screen name="PatientNavigator" component={PatientNavigator} />
      )}
    </Stack.Navigator>
  );
};
