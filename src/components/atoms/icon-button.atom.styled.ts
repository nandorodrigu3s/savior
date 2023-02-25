import styled from 'styled-components/native';

interface IconButtonProps {
  bgColor?: string;
  color?: string;
  radiusBorderValue?: number;
  buttonWidth?: number;
  buttonHeight?: number;
}

export const IconButton = styled.TouchableOpacity<IconButtonProps>`
  padding: 4px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${(props: IconButtonProps) =>
    props.bgColor ?? 'transparent'};
  color: ${(props: IconButtonProps) => props.color ?? '#FFF'};
  ${(props: IconButtonProps) =>
    props.buttonWidth && `width: ${props.buttonWidth}%;`};
  ${(props: IconButtonProps) =>
    props.buttonWidth && `min-width: ${props.buttonWidth}%;`};
  ${(props: IconButtonProps) =>
    props.buttonHeight && `height: ${props.buttonHeight}%;`};
  ${(props: IconButtonProps) =>
    props.radiusBorderValue
      ? `border-radius: ${String(props.radiusBorderValue)}px;`
      : null};
`;
