import React, { useState } from 'react';
import { BaseTheme } from '@assets/theme/app-theme';
import { AppInputContainer } from '@components/atoms/app-input-container.atom.styled';
import { Container } from '@components/atoms/container.atom.styled';
import { Input } from '@components/atoms/input.atom.styled';
import { AppIconButton } from './app-icon-button.mol';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface AppInputProps {
  showButton?: boolean;
  leftIconName: string;
  rightIconName?: string;
  buttonIconName?: string;
  iconColor?: string;
  isInputPassword?: boolean;
  onTapButton?: () => void;
  size?: string;
  externalValue?: string;
  externalHandleChange?: any;
  autoCap?: 'sentences' | 'words' | 'characters';
  isEntypo?: boolean;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
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
      mb={0}
      hasBorder
      hasRadius
      direction="row"
      mt={BaseTheme.size.small}
      justifyCon
      alignIt>
      <Container justifyCon alignIt>
        {props.isEntypo ? (
          <EntypoIcon
            name={props.leftIconName}
            color={props.iconColor ?? BaseTheme.colors.primary}
            size={BaseTheme.size.large}
          />
        ) : (
          <Icon
            name={props.leftIconName}
            color={props.iconColor ?? BaseTheme.colors.primary}
            size={BaseTheme.size.large}
          />
        )}
      </Container>
      <Container direction="row" justifyBetween alignIt containerWidth={75}>
        <Input
          pl={10}
          hasBorderL
          onChangeText={props.externalHandleChange ?? handleText}
          inputWidth={!props.isInputPassword ? 90 : 73}
          value={props.externalValue ?? value}
          secureTextEntry={isSecureInput}
          themeSize={props?.size}
          autoCapitalize={props.autoCap ?? 'none'}
          accessible={props.accessible}
          accessibilityLabel={props.accessibilityLabel}
          accessibilityHint={props.accessibilityHint}
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
