import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../theme/theme';

import {HomeScreen} from '../screens/Home/HomeScreen';
import {AppointmentScreen} from '../screens/Appointment/AppointmentScreen';
import {AppointmentHistoryScreen} from '../screens/AppointmentHistory/AppointmentHistoryScreen';
import {ProfileScreen} from '../screens/Profile/ProfileScreen';

import IconHome from '../assets/icons/icon-home.svg';
import IconHomeActive from '../assets/icons/icon-home-active.svg';
import IconCalendar from '../assets/icons/icon-calendar.svg';
import IconCalendarActive from '../assets/icons/icon-calendar-active.svg';
import IconList from '../assets/icons/icon-list.svg';
import IconListActive from '../assets/icons/icon-list-active.svg';
import IconProfile from '../assets/icons/icon-profile.svg';
import IconProfileActive from '../assets/icons/icon-profile-active.svg';

const Tab = createBottomTabNavigator();

const HomeIcon = ({focused}: {focused: boolean}) =>
  focused ? <IconHomeActive /> : <IconHome />;

const CalendarIcon = ({focused}: {focused: boolean}) =>
  focused ? <IconCalendarActive /> : <IconCalendar />;

const ListIcon = ({focused}: {focused: boolean}) =>
  focused ? <IconListActive /> : <IconList />;

const ProfileIcon = ({focused}: {focused: boolean}) =>
  focused ? <IconProfileActive /> : <IconProfile />;

export function BottomTabNavigator() {
  const theme = useTheme<Theme>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopWidth: 1,
          borderTopColor: theme.colors.backgroundHighlight,
          height: 88,
          paddingBottom: theme.spacing.spacing32,
          paddingTop: theme.spacing.spacing8,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarLabelStyle: {
          fontFamily: theme.textVariants.caption.fontFamily,
          fontSize: theme.textVariants.caption.fontSize,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={AppointmentScreen}
        options={{
          tabBarIcon: CalendarIcon,
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={AppointmentHistoryScreen}
        options={{
          tabBarIcon: ListIcon,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
}
