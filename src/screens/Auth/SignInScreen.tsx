import React from 'react';
import {Image, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Box} from '../../components/Box/Box';
import {Button} from '../../components/Button/Button';
import {FormSchemaSignIn} from '../../utils/formSchemaValidators';
import LogoImage from '../../assets/images/logo-cuidaae.png';
import {Screen} from '../../components/Screen/Screen';
import {FormTextInput} from '../../components/Form/FormTextInput';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigator';
import {useAuthStore} from '../../store/useAuthStore';
import {Text} from '../../components/Text/Text';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignInScreen'>;

export const SignInScreen = ({navigation}: Props) => {
  const {signIn, isLoading, error} = useAuthStore();

  const {control, formState, handleSubmit, reset} = useForm<FormSchemaSignIn>({
    resolver: zodResolver(FormSchemaSignIn),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormSchemaSignIn) => {
    console.log(data.email, data.password);
    await signIn(data.email, data.password);

    reset();
    navigation.navigate('HomeScreen');
  };

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1}}>
        <Screen centerContent>
          <Box
            width={350}
            height={120}
            justifyContent="center"
            alignItems="center">
            <Image
              source={LogoImage}
              style={{width: 275, height: 275}}
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
              <Text style={{color: 'red', textAlign: 'center'}}>{error}</Text>
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
