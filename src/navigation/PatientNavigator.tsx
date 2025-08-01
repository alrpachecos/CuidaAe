import React from 'react';

import { AppointmentsScreen } from '../screens/Patient/AppointmentsScreen';
import { HomeScreen } from '../screens/Patient/HomeScreen';
import { ProfileScreen } from '../screens/Patient/ProfileScreen';

import { BottomTabNavigator } from './BottomTabNavigator';

export const PatientNavigator = () => {
  const screens = [
    {
      name: 'Home',
      component: HomeScreen,
      label: 'Início',
      iconType: 'home' as const,
    },
    {
      name: 'Appointments',
      component: AppointmentsScreen,
      label: 'Consultas',
      iconType: 'calendar' as const,
    },
    {
      name: 'Profile',
      component: ProfileScreen,
      label: 'Perfil',
      iconType: 'profile' as const,
    },
  ];

  return <BottomTabNavigator screens={screens} />;
};
