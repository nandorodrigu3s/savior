import React, { useEffect, useState } from 'react';
import { Container } from '@components/atoms/container.atom.styled';
import { Input } from '@components/atoms/input.atom.styled';
import { BaseTheme } from '@assets/theme/app-theme';
import { Canvas } from '@react-three/fiber/native';
import { Cube } from '@components/mols/mol.app-3d-objects/cube.mol';
import { Cone } from '@components/mols/mol.app-3d-objects/cone.mol';
import { Dodecahedron } from '@components/mols/mol.app-3d-objects/dodecaedro.mol';
import { Home3DObjectColors } from '@system/common/interfaces';
import { AppSubmitButton } from '@components/mols/app-submit-button.mol';
import { StatusBar } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { AppIconButton } from '@components/mols/app-icon-button.mol';
import firestore from '@react-native-firebase/firestore';
import validateColor from 'validate-color';
import { showMessage, hideMessage } from 'react-native-flash-message';

const Home = React.memo(props => {
  const [isLoading, setIsLoading] = useState(true);

  const [cubeColor, setCubeColor] = useState<string>(
    BaseTheme.colors.threeObjects.cube,
  );

  const [coneColor, setConeColor] = useState<string>(
    BaseTheme.colors.threeObjects.cone,
  );

  const [dodecahedronColor, setDodecahedronColor] = useState<string>(
    BaseTheme.colors.threeObjects.dodecahedron,
  );

  const [objectsColors, setObjectsColors] = useState<Home3DObjectColors>({
    cone: coneColor,
    cube: cubeColor,
    dodecahedron: dodecahedronColor,
  });

  const buildMessage = (colors: Home3DObjectColors): string | null => {
    const helper: string[] = [];

    Object.values(colors).forEach((item, index) => {
      if (!validateColor(item)) {
        helper.push(Object.keys(colors)[index]);
      }
    });

    let message = null;
    if (helper?.length && helper.length === 1) {
      message = `A cor informada no campo (${helper.join(' ')}) é inválida`;
    }
    if (helper?.length && helper.length > 1) {
      message = `As cores informadas nos campos (${helper.join(
        ' ',
      )}) são inválidas`;
    }
    return message;
  };

  const { navigate } = useNavigation();

  useBackHandler(() => {
    return true;
  });

  const sigOut = () => {
    auth()
      .signOut()
      .then(() => {
        navigate({ name: 'Login', params: {} } as never);
      });
  };

  useEffect(() => {
    firestore()
      .collection('users-colors-preferences')
      .doc(props.route?.params?.email)
      .get()
      .then(documentSnapshot => {
        setIsLoading(false);
        console.log('hasData: ', documentSnapshot.exists);
        if (documentSnapshot.exists) {
          console.log('User Preferences: ', documentSnapshot.data());
          const colors: any = documentSnapshot.data();
          if (colors && Object.keys(colors.objectsColors).length > 0) {
            setObjectsColors(colors.objectsColors);
          }
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  const saveColors = (params: Home3DObjectColors) => {
    let message = buildMessage(params);
    if (message) {
      showMessage({
        message,
        type: 'info',
        duration: 4500,
      });
      return;
    }
    firestore()
      .collection('users-colors-preferences')
      .doc(props.route?.params?.email)
      .set({
        objectsColors: params,
      })
      .then(() => {
        setObjectsColors(params);
      });
  };

  return (
    <Container containerHeight={100} largeBorder>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={BaseTheme.colors.black}
      />
      <Container
        noFlex
        absolute
        style={{ top: 25, zIndex: 10000, left: 15, width: 200, height: 200 }}>
        <AppIconButton
          iconColor={BaseTheme.colors.white}
          isPassword={false}
          iconName={'sign-out'}
          onTapButton={sigOut}
          bgColor={BaseTheme.colors.black}
        />
      </Container>
      <Container bgColor={BaseTheme.colors.black}>
        {!isLoading && (
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
        )}
      </Container>
      <Container bgColor={'#FFF'} noFlex absolute style={{ bottom: 0 }}>
        <Container noFlex hasBorder direction={'row'} justifyBetween>
          <Input
            onChangeText={value => setCubeColor(value)}
            hasBorder
            placeholder="Cor do Cubo"
            inputWidth={33.3}
            inputHeight={26}
            autoCapitalize={'none'}
          />
          <Input
            onChangeText={value => setConeColor(value)}
            hasBorder
            placeholder="Cor do Cone"
            inputWidth={33.3}
            inputHeight={26}
            autoCapitalize={'none'}
          />
          <Input
            onChangeText={value => setDodecahedronColor(value)}
            hasBorder
            placeholder="Cor do Dodecaedro"
            inputWidth={33.3}
            inputHeight={26}
            autoCapitalize={'none'}
          />
        </Container>
        <Container noFlex>
          <AppSubmitButton
            label={'Aplicar'}
            regularLabelStyle
            onSubmit={() =>
              saveColors({
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
