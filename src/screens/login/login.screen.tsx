import { Container } from '@components/atoms/container.atom.styled';
import { AppInput } from '@components/mols/app-input.mol';
import React, { useContext, useEffect, useState } from 'react';

type LoginFormData = {
  username: string;
  password: string;
};

const Login = React.memo(() => {
  return (
    <Container hasPadding justifyCon alignIt>
      <AppInput leftIconName={'user-circle-o'} showButton />
      <AppInput isInputPassword leftIconName={'lock'} showButton />
    </Container>
  );
});

export default Login;
