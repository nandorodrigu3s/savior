import { BaseTheme } from '@assets/theme/app-theme';
import { SubmitButton } from '@components/atoms/atm.submit-button/app-submit-button.atom.styled';
import { SubmitButtonText } from '@components/atoms/atm.submit-button/submit-button-text.atom.styled';
import { Container } from '@components/atoms/container.atom.styled';
import { AppInput } from '@components/mols/app-input.mol';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useForm, Controller } from 'react-hook-form';
import { TextError } from '@components/atoms/text-error.atom.styled';

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { reset } = useNavigation();
  const [requestError, setRequestError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cleanRequestError = () => {
    if (requestError.length > 0) {
      setRequestError('');
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  console.log(errors);
  const onLogin = (data: LoginFormData) => {
    setIsLoading(true);
    cleanRequestError();
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(credentials => {
        console.log(credentials);
        setIsLoading(false);
        reset({
          index: 0,
          routes: [{ name: 'Home', params: { email: credentials.user.email } }],
        });
        // navigate({ name: 'Home', params: {} } as never);
      })
      .catch(error => {
        setIsLoading(false);
        if (error.code === 'auth/user-not-found') {
          setRequestError('Email e/ou senha inválidos');
          return;
        }
        setRequestError('Erro ao realizar login. Tente novamente em instantes');
      });
  };

  return (
    <Container bgColor={BaseTheme.colors.white} hasPadding justifyCon alignIt>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor={BaseTheme.colors.white}
      />
      {requestError?.length > 0 && <TextError>{requestError}</TextError>}
      {errors?.email && <TextError>{errors?.email?.message}</TextError>}
      {errors?.password && <TextError>{errors?.password?.message}</TextError>}
      <Controller
        control={control}
        name={'email'}
        rules={{
          required: 'O campo email é obrigatório',
          pattern: {
            message: 'É preciso informar um email válido',
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          },
        }}
        render={({ field: { value, onChange } }) => (
          <AppInput
            externalHandleChange={event => {
              cleanRequestError();
              onChange(event);
            }}
            externalValue={value}
            leftIconName={'user-circle-o'}
            size={'medium'}
          />
        )}
      />
      <Controller
        control={control}
        name={'password'}
        rules={{
          required: 'O campo senha é obrigatório',
        }}
        render={({ field: { value, onChange } }) => (
          <AppInput
            externalHandleChange={event => {
              cleanRequestError();
              onChange(event);
            }}
            externalValue={value}
            isInputPassword
            leftIconName={'lock'}
            showButton
            size={'medium'}
          />
        )}
      />
      <SubmitButton disabled={isLoading} onPress={handleSubmit(onLogin)}>
        <SubmitButtonText txtCenter={isLoading}>
          {isLoading ? (
            <ActivityIndicator size={20} color={BaseTheme.colors.white} />
          ) : (
            'Entrar'
          )}
        </SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default Login;
