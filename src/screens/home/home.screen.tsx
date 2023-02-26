import React, { useContext, useEffect, useState } from 'react';
import { Container } from '@components/atoms/container.atom.styled';
import { SubmitButton } from '@components/atoms/atm.submit-button/app-submit-button.atom.styled';
import { SubmitButtonText } from '@components/atoms/atm.submit-button/submit-button-text.atom.styled';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@components/atoms/input.atom.styled';
import { BaseTheme } from '@assets/theme/app-theme';

const Home = React.memo(() => {
  const { navigate } = useNavigation();
  return (
    <Container containerHeight={100}>
      <Container bgColor={BaseTheme.colors.highlight} />
      <Container
        noFlex
        hasBorder
        direction={'row'}
        containerHeight={4}
        justifyBetween>
        <Input hasBorder placeholder="Cor do Cubo" inputWidth={33.3} />
        <Input hasBorder placeholder="Cor do Cone" inputWidth={33.3} />
        <Input hasBorder placeholder="Cor do Dodecaedro" inputWidth={33.3} />
      </Container>
      <SubmitButton
        noMarginTop
        noMarginBottom
        buttonWidth={100}
        noRadius
        bgColor={'#EFEFEF'}
        onPress={() => navigate({ name: 'Login', params: {} } as never)}>
        <SubmitButtonText defaultStyle color={'#000'} txtCenter>
          Aplicar
        </SubmitButtonText>
      </SubmitButton>
    </Container>
  );
});

export default Home;
