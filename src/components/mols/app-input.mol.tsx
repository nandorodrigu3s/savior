import React, { useState } from 'react';
import { BaseTheme } from '../../assets/theme/app-theme';
import { AppInputContainer } from '../atoms/app-input-container.atom.styled';
import { Container } from '../atoms/container.atom.styled';
import { Input } from '../atoms/input.atom.styled';
import { AppIconButton } from './app-icon-button.mol';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AppInputProps {
  showButton?: boolean;
  sideIconName: string;
  buttonIconName?: string;
  iconColor?: string;
  isInputPassword?: boolean;
}

export const AppInput = (props: AppInputProps) => {
  const [value, setValue] = useState('');
  const [isSecureInput, setIsSecureInput] = useState(true);

  const handleText = (text: string) => {
    setValue(text);
  };

  return (
    <AppInputContainer
      containerHeight={50}
      margin={12}
      hasBorder
      hasRadius
      direction="row"
      mt={BaseTheme.size.small}
      justifyCon
      alignIt>
      <Container justifyCon alignIt>
        <Icon
          name={props.sideIconName}
          color={props.iconColor}
          size={BaseTheme.size.large}
        />
      </Container>
      <Container direction="row" justifyBetween alignIt containerWidth={75}>
        <Input
          hasBorderL
          onChangeText={handleText}
          inputWidth={73}
          value={value}
          secureTextEntry={isSecureInput}
        />
        {props.showButton && (
          <AppIconButton
            iconColor={props.iconColor}
            isPassword={props.isInputPassword}
            onTapButton={() => setIsSecureInput(!isSecureInput)}
          />
        )}
      </Container>
    </AppInputContainer>
  );
};
