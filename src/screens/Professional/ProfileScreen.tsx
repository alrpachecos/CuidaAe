import React from 'react';
import {Box} from '../../components/Box/Box';
import {Text} from '../../components/Text/Text';
import {Button} from '../../components/Button/Button';
import {useAuthStore} from '../../store/useAuthStore';

export const ProfileScreen = () => {
  const {user, logout} = useAuthStore();

  return (
    <Box flex={1} backgroundColor="background" padding="spacing16">
      <Text preset="heading2" marginBottom="spacing16">
        Perfil do Profissional
      </Text>
      <Text preset="body1" marginBottom="spacing8">
        Nome: {user?.name}
      </Text>
      <Button onPress={logout} title="Sair" variant="secondary" />
    </Box>
  );
};
