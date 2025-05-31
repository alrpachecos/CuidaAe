import React from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import {Box} from '../../components/Box/Box';
import {Button} from '../../components/Button/Button';
import {FormSchemaSignUp} from '../../utils/formSchemaValidators';
import LogoImage from '../../assets/images/logo-cuidaae.png';
import {Screen} from '../../components/Screen/Screen';
import {FormTextInput} from '../../components/Form/FormTextInput';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAuthStore} from '../../store/useAuthStore';
import {AuthStackParamList} from '../../navigation/AuthNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUpScreen'>;

export const SignUpScreen = ({navigation}: Props) => {
  const {signUp, isLoading, error} = useAuthStore();

  const {control, formState, handleSubmit, reset} = useForm<FormSchemaSignUp>({
    resolver: zodResolver(FormSchemaSignUp),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormSchemaSignUp) => {
    await signUp(data.name, data.email, data.password);
    reset();
  };

  const navigateToSignInScreen = () => {
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
            placeholder="Digite seu nome completo"
            name="name"
            label="Nome completo"
            errorMessage={formState.errors.name?.message}
          />

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

          <Button
            title="Cadastrar"
            onPress={handleSubmit(onSubmit)}
            variant="primary"
            loading={isLoading}
          />

          <Box marginTop="spacing32">
            <Button
              title="Voltar"
              onPress={navigateToSignInScreen}
              variant="text"
            />
          </Box>
        </Screen>
      </View>
    </TouchableWithoutFeedback>
  );
};
