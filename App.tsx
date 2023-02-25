/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Container } from './src/components/atoms/container.atom.styled';
import { AppInput } from './src/components/mols/app-input.mol';

const App = () => {
  return (
    <SafeAreaView>
      <Container hasPadding>
        <AppInput sideIconName={'user-circle-o'} showButton />
        <AppInput isInputPassword sideIconName={'lock'} showButton />
      </Container>
    </SafeAreaView>
  );
};

export default App;
