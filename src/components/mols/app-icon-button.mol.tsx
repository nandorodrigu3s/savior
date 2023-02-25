import React, { useEffect, useState } from 'react';
import { IconButton } from '../atoms/icon-button.atom.styled';
import { BaseTheme } from '../../assets/theme/app-theme';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AppIconButtonProps {
  isPassword?: boolean;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  labelColor?: string;
  onTapButton?: () => void;
}

export const AppIconButton = (props: AppIconButtonProps) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordIcon, setHidePasswordIcon] = useState('eye-slash');

  useEffect(() => {
    !hidePassword && setHidePasswordIcon('eye-slash');
    hidePassword && setHidePasswordIcon('eye');
  }, [hidePassword]);

  return props.isPassword ? (
    <IconButton
      onPress={() => {
        setHidePassword(!hidePassword);
        props.onTapButton && props.onTapButton();
      }}
      buttonWidth={15}>
      <Icon
        name={hidePasswordIcon}
        color={`${props.labelColor}`}
        size={BaseTheme.size.custom}
      />
    </IconButton>
  ) : (
    <IconButton
      onPress={() => props.onTapButton && props.onTapButton()}
      buttonWidth={15}>
      <Icon
        name={props.iconName!}
        color={`${props.iconColor}`}
        size={BaseTheme.size.custom}
      />
    </IconButton>
  );
};
