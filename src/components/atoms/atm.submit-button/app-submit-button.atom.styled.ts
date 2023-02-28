import styled from 'styled-components/native';

interface SubmitButtonProps {
  bgColor?: string;
  radiusBorderValue?: number;
  buttonWidth?: number;
  hasLargePadding?: boolean;
  hasPaddingLeft?: boolean;
  justifyCon?: boolean;
  alignIt?: boolean;
  noRadius?: boolean;
  noMarginTop?: boolean;
  noMarginBottom?: boolean;
  isDisabled?: boolean;
}

export const SubmitButton = styled.TouchableOpacity<SubmitButtonProps>`
  padding: 12px;
  ${props => !props.noMarginTop && 'margin-top: 16px;'};
  ${props => !props.noMarginBottom && 'margin-bottom: 16px;'};
  ${props => !props.noRadius && 'border-radius: 4px;'};
  background-color: ${props =>
    props.isDisabled
      ? props.theme.colors.lightGrey
      : props.bgColor ?? props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  ${props => props.justifyCon && 'justify-content: center;'};
  ${props => props.alignIt && 'align-items: center;'};
  ${props => props.hasLargePadding && 'padding: 16px;'};
  ${props => props.hasPaddingLeft && 'padding-left: 48px;'};
  width: ${(props: SubmitButtonProps) =>
    props.buttonWidth ? `${props.buttonWidth}%` : '50%'};
`;
