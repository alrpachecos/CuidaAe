import React from 'react';
import { Text, StyleSheet, ActivityIndicator, Pressable } from 'react-native';

import { useTheme } from '@shopify/restyle';
import { Theme } from '@theme/theme';
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'text';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  fullWidth = false,
}: ButtonProps) => {
  const theme = useTheme<Theme>();

  const buttonStyles = [
    styles.button,
    { borderRadius: theme.borderRadii.radius8 },
    variant === 'primary' && { backgroundColor: theme.colors.primary },
    variant === 'secondary' && { backgroundColor: theme.colors.secondary },
    variant === 'outline' && {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    variant === 'link' && {
      backgroundColor: 'transparent',
      borderWidth: 0,
      color: theme.colors.primary,
    },
    variant === 'text' && {
      backgroundColor: 'transparent',
      borderWidth: 0,
      padding: 0,
      minHeight: 0,
    },
    disabled && {
      backgroundColor: theme.colors.textDisabled,
      opacity: 0.5,
    },
    fullWidth && styles.fullWidth,
  ];

  const textStyles = [
    theme.textVariants.button,
    variant === 'outline' && { color: theme.colors.primary },
    disabled && { color: theme.colors.primaryContrast },
    variant === 'link' && { color: theme.colors.primary },
    variant === 'text' && {
      color: theme.colors.primary,
      fontSize: 16,
      lineHeight: 24,
    },
  ];

  return (
    <Pressable
      style={buttonStyles}
      onPress={onPress}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'outline'
              ? theme.colors.primary
              : theme.colors.primaryContrast
          }
        />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  fullWidth: {
    width: '100%',
  },
});
