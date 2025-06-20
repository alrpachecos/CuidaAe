import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../theme/theme';
import {icons} from '../components/icons';

const Tab = createBottomTabNavigator();

interface BottomTabNavigatorProps {
  screens: {
    name: string;
    component: React.ComponentType<any>;
    label: string;
    iconType: keyof typeof icons;
  }[];
}

export function BottomTabNavigator({screens}: BottomTabNavigatorProps) {
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
      {screens.map(screen => {
        const Icon = ({focused}: {focused: boolean}) => {
          const IconComponent = focused
            ? icons[screen.iconType].active
            : icons[screen.iconType].default;
          return <IconComponent />;
        };

        return (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              tabBarLabel: screen.label,
              tabBarIcon: Icon,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
