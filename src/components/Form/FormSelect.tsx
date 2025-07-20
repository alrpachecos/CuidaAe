import React from 'react';

import { Box } from '@components/Box/Box';
import { Text } from '@components/Text/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@theme/theme';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';

import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';

type Option = {
  label: string;
  value: string;
};

interface FormSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  options: Option[];
  errorMessage?: string;
  disabled?: boolean;
  placeholder?: string;
}

export function FormSelect<T extends FieldValues>({
  control,
  name,
  label,
  options,
  errorMessage,
  disabled = false,
  placeholder,
}: FormSelectProps<T>) {
  const theme = useTheme<Theme>();

  return (
    <Box marginBottom="spacing16">
      <Text variant="body1" marginBottom="spacing4">
        {label}
      </Text>

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <RNPickerSelect
            onValueChange={onChange}
            value={value}
            items={options}
            disabled={disabled}
            placeholder={{
              label: placeholder,
              value: null,
              color: theme.colors.grayLight,
            }}
            Icon={() => <IconArrowDown width={24} height={24} />}
            style={{
              inputIOS: {
                height: 48,
                borderWidth: 1,
                borderColor: errorMessage
                  ? theme.colors.error
                  : theme.colors.grayLight,
                borderRadius: theme.borderRadii.radius8,
                paddingHorizontal: theme.spacing.spacing16,
                color: theme.colors.textPrimary,
                backgroundColor: theme.colors.background,
                fontSize: 16,
              },
              inputAndroid: {
                height: 48,
                borderWidth: 1,
                borderColor: errorMessage
                  ? theme.colors.error
                  : theme.colors.grayLight,
                borderRadius: theme.borderRadii.radius8,
                paddingHorizontal: theme.spacing.spacing16,
                color: theme.colors.textPrimary,
                backgroundColor: theme.colors.background,
                fontSize: 16,
              },
              placeholder: {
                color: theme.colors.grayLight,
              },
              iconContainer: {
                top: 12,
                right: 12,
              },
            }}
            useNativeAndroidPickerStyle={false}
          />
        )}
      />

      {errorMessage && (
        <Text variant="body2" color="error" marginTop="spacing4">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
}
