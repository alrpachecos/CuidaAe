import React from 'react';
import {Box} from '../../components/Box/Box';
import {Text} from '../../components/Text/Text';
import {useAuthStore} from '../../store/useAuthStore';

export const HomeScreen = () => {
  const {user} = useAuthStore();

  return (
    <Box flex={1} backgroundColor="background" padding="spacing16">
      <Text preset="heading1" marginBottom="spacing8">
        Bem-vindo(a), {user?.name}
      </Text>
      <Text preset="body1" color="textSecondary">
        Área do Paciente
      </Text>
    </Box>
  );
};
