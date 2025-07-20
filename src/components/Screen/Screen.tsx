import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box } from '@components/Box/Box';
import { Text } from '@components/Text/Text';
import { useNavigation } from '@react-navigation/native';

import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { PressableBox } from '../Box/Box';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer';
interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  centerContent?: boolean;
}

export const Screen = ({
  children,
  canGoBack = false,
  scrollable = false,
  centerContent = false,
}: ScreenProps) => {
  const { top, bottom } = useAppSafeArea();
  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor="background">
        <Box
          flex={1}
          paddingHorizontal="spacing24"
          style={{ paddingTop: top, paddingBottom: bottom }}
          justifyContent={centerContent ? 'center' : 'flex-start'}>
          {canGoBack && (
            <PressableBox
              onPress={navigation.goBack}
              marginBottom="spacing24"
              flexDirection="row"
              alignItems="center">
              <Text
                variant="body1"
                color="textPrimary"
                marginLeft="spacing8"
                medium>
                Voltar
              </Text>
            </PressableBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
};
