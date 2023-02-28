import { BaseTheme } from '@assets/theme/app-theme';
import { SubmitButton } from '@components/atoms/atm.submit-button/app-submit-button.atom.styled';
import { SubmitButtonText } from '@components/atoms/atm.submit-button/submit-button-text.atom.styled';
import { Container } from '@components/atoms/container.atom.styled';
import { AppInput } from '@components/mols/app-input.mol';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

type LoginFormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { navigate } = useNavigation();
  return (
    <Container bgColor={BaseTheme.colors.white} hasPadding justifyCon alignIt>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor={BaseTheme.colors.white}
      />
      <AppInput leftIconName={'user-circle-o'} showButton size={'medium'} />
      <AppInput
        isInputPassword
        leftIconName={'lock'}
        showButton
        size={'medium'}
      />
      <SubmitButton
        onPress={() => navigate({ name: 'Home', params: {} } as never)}>
        <SubmitButtonText>Entrar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default Login;
