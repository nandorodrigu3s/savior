import React, { useContext, useEffect, useState } from 'react';
import { Container } from '@components/atoms/container.atom.styled';
import { SubmitButton } from '@components/atoms/atm.submit-button/app-submit-button.atom.styled';
import { SubmitButtonText } from '@components/atoms/atm.submit-button/submit-button-text.atom.styled';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@components/atoms/input.atom.styled';
import { BaseTheme } from '@assets/theme/app-theme';
import { Canvas } from '@react-three/fiber/native';
import { Cube } from '@components/mols/cube.mol';
import { Cone } from '@components/mols/cone.mol';
import { Dodecahedron } from '@components/mols/dodecaedro.mol';
import { Home3DObjectColors } from '@system/common/interfaces';
const Home = React.memo(() => {
  const { navigate } = useNavigation();
  const [cubeColor, setCubeColor] = useState<string>('#f12a02');
  const [coneColor, setConeColor] = useState<string>('#AFB500');
  const [dodecahedronColor, setDodecahedronColor] = useState<string>('#30b500');
  const [objectsColors, setObjectsColors] = useState<Home3DObjectColors>({
    cone: coneColor,
    cube: cubeColor,
    dodecahedron: dodecahedronColor,
  });
  return (
    <Container containerHeight={100} hasBorder>
      <Container bgColor={BaseTheme.colors.black}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Cube color={objectsColors.cube} position={[0, 2.2, 0]} />
          <Cone color={objectsColors.cone} position={[0, 0, 0]} />
          <Dodecahedron
            color={objectsColors.dodecahedron}
            position={[0, -2.2, 0]}
          />
        </Canvas>
      </Container>
      <Container
        noFlex
        hasBorder
        direction={'row'}
        containerHeight={4}
        justifyBetween>
        <Input
          onChangeText={value => setCubeColor(value)}
          hasBorder
          placeholder="Cor do Cubo"
          inputWidth={33.3}
        />
        <Input
          onChangeText={value => setConeColor(value)}
          hasBorder
          placeholder="Cor do Cone"
          inputWidth={33.3}
        />
        <Input
          onChangeText={value => setDodecahedronColor(value)}
          hasBorder
          placeholder="Cor do Dodecaedro"
          inputWidth={33.3}
        />
      </Container>
      <SubmitButton
        noMarginTop
        noMarginBottom
        buttonWidth={100}
        noRadius
        bgColor={'#EFEFEF'}
        onPress={() => {
          setObjectsColors({
            cone: coneColor,
            cube: cubeColor,
            dodecahedron: dodecahedronColor,
          });
        }}>
        <SubmitButtonText defaultStyle color={'#000'} txtCenter>
          Aplicar
        </SubmitButtonText>
      </SubmitButton>
    </Container>
  );
});

export default Home;
