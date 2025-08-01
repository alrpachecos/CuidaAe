import React from 'react';
import {
  Image,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageSourcePropType,
} from 'react-native';

import LogoImage from '@assets/images/logo-cuidaae.png';
import { Box } from '@components/Box/Box';
import { Button } from '@components/Button/Button';
import { FormTextInput } from '@components/Form/FormTextInput';
import { Screen } from '@components/Screen/Screen';
import { Text } from '@components/Text/Text';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthStackParamList } from '@navigation/AuthNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuthStore } from '@store/useAuthStore';
import { FormSchemaSignIn } from '@utils/formSchemaValidators';
import { useForm } from 'react-hook-form';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignInScreen'>;

export const SignInScreen = ({ navigation }: Props) => {
  const { login, isLoading, error } = useAuthStore();

  const { control, formState, handleSubmit, reset } = useForm<FormSchemaSignIn>(
    {
      resolver: zodResolver(FormSchemaSignIn),
      defaultValues: {
        email: '',
        password: '',
      },
      mode: 'onChange',
    },
  );

  const onSubmit = async (data: FormSchemaSignIn) => {
    console.log(data.email, data.password);
    await login(data.email, data.password);
    reset();
  };

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <Screen centerContent>
          <Box
            width={350}
            height={120}
            justifyContent="center"
            alignItems="center">
            <Image
              source={LogoImage as ImageSourcePropType}
              style={{ width: 275, height: 275 }}
              resizeMode="cover"
            />
          </Box>

          <FormTextInput
            control={control}
            placeholder="Digite seu e-mail"
            name="email"
            label="E-mail"
            errorMessage={formState.errors.email?.message}
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="email"
          />

          <FormTextInput
            control={control}
            placeholder="Digite sua senha"
            name="password"
            label="Senha"
            errorMessage={formState.errors.password?.message}
            secureTextEntry
            autoComplete="password"
          />

          {error && (
            <Box marginBottom="spacing16">
              <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
            </Box>
          )}

          <Box marginTop="spacing24">
            <Button
              title="Entrar"
              onPress={handleSubmit(onSubmit)}
              variant="primary"
              loading={isLoading}
              fullWidth
            />
          </Box>

          <Box marginTop="spacing16">
            <Button
              title="Esqueci minha senha"
              onPress={navigateToForgotPasswordScreen}
              variant="link"
            />
          </Box>
        </Screen>
        <Box
          marginBottom="spacing56"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="spacing4">
          <Text>Ainda não tem uma conta?</Text>
          <Button
            title="Cadastre-se"
            onPress={navigateToSignUpScreen}
            variant="text"
          />
        </Box>
      </View>
    </TouchableWithoutFeedback>
  );
};
