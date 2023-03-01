import { SubmitButton } from '@components/atoms/atm.submit-button/app-submit-button.atom.styled';
import { SubmitButtonText } from '@components/atoms/atm.submit-button/submit-button-text.atom.styled';
import React from 'react';

interface AppSubmitButtonProps {
  label: string;
  onSubmit: () => void;
  hasMarginTop?: boolean;
  hasMarginBottom?: boolean;
  buttonWidth?: number;
  hasRadius?: boolean;
  bgButtonColor?: string;
  isUppercase?: boolean;
  labelColor?: string;
  textCenter?: boolean;
  regularLabelStyle?: boolean;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export const AppSubmitButton = (props: AppSubmitButtonProps) => {
  return (
    <SubmitButton
      noMarginTop={!props.hasMarginTop}
      noMarginBottom={!props.hasMarginBottom}
      buttonWidth={props?.buttonWidth ?? 100}
      noRadius={!props.hasRadius}
      bgColor={props?.bgButtonColor ?? '#EFEFEF'}
      onPress={props.onSubmit}
      accessible={props.accessible}
      accessibilityLabel={props.accessibilityLabel}
      accessibilityHint={props.accessibilityHint}>
      <SubmitButtonText
        defaultStyle={!props.isUppercase}
        color={props?.labelColor ?? '#000'}
        txtCenter={props.textCenter}
        regular={props.regularLabelStyle}>
        {props.label}
      </SubmitButtonText>
    </SubmitButton>
  );
};
