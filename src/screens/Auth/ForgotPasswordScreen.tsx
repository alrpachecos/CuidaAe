import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import LogoImage from '@assets/images/logo-cuidaae.png';
import { Box } from '@components/Box/Box';
import { Button } from '@components/Button/Button';
import { FormTextInput } from '@components/Form/FormTextInput';
import { Screen } from '@components/Screen/Screen';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchemaForgotPassword } from '@utils/formSchemaValidators';
import { useForm } from 'react-hook-form';

export const ForgotPasswordScreen = () => {
  const { control, formState, handleSubmit } =
    useForm<FormSchemaForgotPassword>({
      resolver: zodResolver(FormSchemaForgotPassword),
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
    });

  const onSubmit = (data: FormSchemaForgotPassword) => {
    console.log(data);
  };

  return (
    <Screen centerContent>
      <Box width={350} height={120} justifyContent="center" alignItems="center">
        <Image
          source={LogoImage as ImageSourcePropType}
          style={{ width: 275, height: 275 }}
          resizeMode="cover"
        />
      </Box>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        errorMessage={formState.errors.email?.message}
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="email"
      />

      <Box marginTop="spacing32">
        <Button
          title="Recuperar senha"
          onPress={handleSubmit(onSubmit)}
          variant="primary"
        />
      </Box>
    </Screen>
  );
};
