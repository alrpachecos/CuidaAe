import React from 'react';
import {BottomTabNavigator} from './BottomTabNavigator';
import {HomeScreen} from '../screens/Professional/HomeScreen';
import {ProfileScreen} from '../screens/Professional/ProfileScreen';
import {AppointmentsScreen} from '../screens/Professional/AppointmentsScreen';

export const ProfessionalNavigator = () => {
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
