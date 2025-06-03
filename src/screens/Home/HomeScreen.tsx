/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button} from '../../components/Button/Button';
import {Text} from '../../components/Text/Text';
import {Box} from '../../components/Box/Box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../theme/theme';

export const HomeScreen = () => {
  return (
    <SafeAreaView
      edges={['top']}
      style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Box flex={1} backgroundColor="background" padding="spacing16">
        <Box marginBottom="spacing32">
          <Text preset="heading1" color="primary">
            Bem-vindo ao ClinicEasy
          </Text>

          <Text preset="body1" color="textSecondary">
            Seu aplicativo de gestão clínica
          </Text>
        </Box>

        {/* Exemplo de Card usando Box */}
        <Box
          backgroundColor="backgroundPaper"
          padding="spacing16"
          borderRadius="radius8"
          marginBottom="spacing24"
          shadowColor="black"
          shadowOffset={{width: 0, height: 2}}
          shadowOpacity={0.1}
          shadowRadius={4}
          elevation={2}>
          <Text preset="heading3" color="primary">
            Card de Exemplo
          </Text>
          <Text preset="body1" marginTop="spacing8">
            Este é um exemplo de card usando o componente Box com sombra e
            bordas arredondadas.
          </Text>
        </Box>

        {/* Exemplo de TouchableOpacityBox */}
        {/* <TouchableOpacityBox
        backgroundColor="primaryLight"
        padding="spacing16"
        borderRadius="radius8"
        marginBottom="spacing24"
        onPress={() => console.log('Pressionado!')}
        activeOpacity={0.7}>
        <Text preset="body1" color="primary">
          Este é um box clicável
        </Text>
        <Text preset="caption" color="textSecondary" marginTop="spacing4">
          Toque para interagir
        </Text>
      </TouchableOpacityBox> */}

        {/* Exemplo de Grid usando Box */}
        <Box
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          marginBottom="spacing24">
          {['1', '2', '3', '4'].map(item => (
            <Box
              key={item}
              width="48%"
              height={100}
              backgroundColor="backgroundHighlight"
              borderRadius="radius8"
              marginBottom="spacing8"
              alignItems="center"
              justifyContent="center">
              <Text preset="body2" color="primary">
                Item {item}
              </Text>
            </Box>
          ))}
        </Box>

        <Button
          title="Sair"
          onPress={() => console.log('HOME')}
          variant="primary"
        />
      </Box>
    </SafeAreaView>
  );
};
