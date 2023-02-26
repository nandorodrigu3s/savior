import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Container } from '@components/atoms/container.atom.styled';

const Home = React.memo(() => {
  return (
    <Container hasPadding>
      <Text>HOME PAGE</Text>
    </Container>
  );
});

export default Home;
