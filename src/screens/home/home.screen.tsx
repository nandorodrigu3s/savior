import React, { useState } from 'react';
import { Container } from '@components/atoms/container.atom.styled';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@components/atoms/input.atom.styled';
import { BaseTheme } from '@assets/theme/app-theme';
import { Canvas } from '@react-three/fiber/native';
import { Cube } from '@components/mols/mol.app-3d-objects/cube.mol';
import { Cone } from '@components/mols/mol.app-3d-objects/cone.mol';
import { Dodecahedron } from '@components/mols/mol.app-3d-objects/dodecaedro.mol';
import { Home3DObjectColors } from '@system/common/interfaces';
import { Color } from 'three';
import { AppSubmitButton } from '@components/mols/app-submit-button.mol';
import { StatusBar } from 'react-native';

const Home = React.memo(() => {
  const { navigate } = useNavigation();
  const [cubeColor, setCubeColor] = useState<string>('#f12a02');
  const [coneColor, setConeColor] = useState<string>('#AFB500');
  const [dodecahedronColor, setDodecahedronColor] = useState<string>('#42AE00');
  const [objectsColors, setObjectsColors] = useState<Home3DObjectColors>({
    cone: coneColor,
    cube: cubeColor,
    dodecahedron: dodecahedronColor,
  });

  return (
    <Container containerHeight={100} largeBorder>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={BaseTheme.colors.black}
      />
      <Container bgColor={BaseTheme.colors.black}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Cube color={objectsColors.cube} position={[0, 2.5, 0]} />
          <Cone color={objectsColors.cone} position={[0, 0.5, 0]} />
          <Dodecahedron
            color={objectsColors.dodecahedron}
            position={[0, -1.5, 0]}
          />
        </Canvas>
      </Container>
      <Container bgColor={'#FFF'} noFlex absolute style={{ bottom: 0 }}>
        <Container noFlex hasBorder direction={'row'} justifyBetween>
          <Input
            onChangeText={value => setCubeColor(value)}
            hasBorder
            placeholder="Cor do Cubo"
            inputWidth={33.3}
            inputHeight={26}
          />
          <Input
            onChangeText={value => setConeColor(value)}
            hasBorder
            placeholder="Cor do Cone"
            inputWidth={33.3}
            inputHeight={26}
          />
          <Input
            onChangeText={value => setDodecahedronColor(value)}
            hasBorder
            placeholder="Cor do Dodecaedro"
            inputWidth={33.3}
            inputHeight={26}
          />
        </Container>
        <Container noFlex>
          <AppSubmitButton
            label={'Aplicar'}
            regularLabelStyle
            onSubmit={() =>
              setObjectsColors({
                cone: coneColor,
                cube: cubeColor,
                dodecahedron: dodecahedronColor,
              })
            }
            textCenter
          />
        </Container>
      </Container>
    </Container>
  );
});

export default Home;
