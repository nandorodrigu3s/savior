import React, { useState } from 'react';
import { BaseTheme } from '@assets/theme/app-theme';
import { AppInputContainer } from '@components/atoms/app-input-container.atom.styled';
import { Container } from '@components/atoms/container.atom.styled';
import { Input } from '@components/atoms/input.atom.styled';
import { AppIconButton } from './app-icon-button.mol';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AppInputProps {
  showButton?: boolean;
  leftIconName: string;
  rightIconName?: string;
  buttonIconName?: string;
  iconColor?: string;
  isInputPassword?: boolean;
  onTapButton?: () => void;
  size?: string;
}

export const AppInput = (props: AppInputProps) => {
  const [value, setValue] = useState('');
  const [isSecureInput, setIsSecureInput] = useState(props.isInputPassword);

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
          name={props.leftIconName}
          color={props.iconColor ?? BaseTheme.colors.primary}
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
          themeSize={props?.size}
        />
        {props.showButton && (
          <AppIconButton
            iconColor={props.iconColor ?? BaseTheme.colors.primary}
            isPassword={props.isInputPassword}
            iconName={props.rightIconName}
            onTapButton={() => {
              setIsSecureInput(!isSecureInput);
              props.onTapButton && props.onTapButton();
            }}
          />
        )}
      </Container>
    </AppInputContainer>
  );
};
