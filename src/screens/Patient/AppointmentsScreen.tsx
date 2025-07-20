import React from 'react';

import { Box } from '../../components/Box/Box';
import { Text } from '../../components/Text/Text';

export const AppointmentsScreen = () => {
  return (
    <Box flex={1} backgroundColor="background" padding="spacing16">
      <Text preset="heading2" marginBottom="spacing16">
        Consultas do Paciente
      </Text>
      <Text preset="body1" color="textSecondary">
        Nenhuma consulta agendada
      </Text>
    </Box>
  );
};
