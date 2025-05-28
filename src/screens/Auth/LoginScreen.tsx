import React from 'react';
import {Image, Text} from 'react-native';
import {Box} from '../../components/Box/Box';
import {Button} from '../../components/Button/Button';
import {FormSchemaLogin} from '../../utils/formSchemaValidators';
import LogoImage from '../../assets/images/logo-cuidaae.png';
import {Screen} from '../../components/Screen/Screen';
import {FormTextInput} from '../../components/Form/FormTextInput';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigator';
import {useAuthStore} from '../../store/useAuthStore';

type Props = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

export const LoginScreen = ({navigation}: Props) => {
  const {signIn, isLoading, error} = useAuthStore();

  const {control, formState, handleSubmit, reset} = useForm<FormSchemaLogin>({
    resolver: zodResolver(FormSchemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormSchemaLogin) => {
    console.log(data.email, data.password);
    const response = await signIn(data.email, data.password);

    console.log(response);

    reset();
  };

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <Screen centerContent>
      <Box width={350} height={120} justifyContent="center" alignItems="center">
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

      <Box marginBottom="spacing32">
        <Button
          title="Esqueci minha senha"
          onPress={navigateToForgotPasswordScreen}
          variant="link"
        />
      </Box>

      <Button
        title="Entrar"
        onPress={handleSubmit(onSubmit)}
        variant="primary"
        loading={isLoading}
      />
    </Screen>
  );
};
