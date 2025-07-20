import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import { Box, BoxProps } from '@components/Box/Box';
import { Text } from '@components/Text/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@theme/theme';

import { fontFamily, fontSize } from '../../constants/typography';
export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export const TextInput = ({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) => {
  const theme = useTheme<Theme>();
  const textInputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'textDisabled',
    padding: 'spacing16',
    borderRadius: 'radius12',
    backgroundColor: 'backgroundPaper',
  };

  const $textInputStyle: TextStyle = {
    flexGrow: 1,
    flexShrink: 1,
    padding: 0,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    color: theme.colors.textPrimary,
  };

  const handleFocusInput = () => {
    textInputRef.current?.focus();
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={handleFocusInput}>
        <Text variant="body1" marginBottom="spacing4">
          {label}
        </Text>

        <Box {...$textInputContainer}>
          <RNTextInput
            autoCapitalize="none"
            ref={textInputRef}
            placeholderTextColor={theme.colors.textDisabled}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box justifyContent="center" marginLeft="spacing16">
              {RightComponent}
            </Box>
          )}
        </Box>

        <Box height={24} justifyContent="center">
          {errorMessage ? (
            <Text variant="caption" color="error">
              {errorMessage}
            </Text>
          ) : null}
        </Box>
      </Pressable>
    </Box>
  );
};
