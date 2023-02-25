import styled from 'styled-components/native';

interface InputProps {
  hasBorder?: boolean;
  hasBorderL?: boolean;
  radiusValue?: number;
  inputWidth?: number;
  inputHeight?: number;
}

export const Input = styled.TextInput<InputProps>`
  padding: 8px;
  ${(props: InputProps) => props.hasBorder && 'border: 1px solid black;'};
  ${(props: InputProps) => props.hasBorderL && 'border-left-width: 1px;'};
  ${(props: InputProps) => props.hasBorderL && 'border-left-color: #CCCED9;'};
  ${(props: InputProps) =>
    props.radiusValue && `border-radius: ${props.radiusValue}px;`};
  ${(props: InputProps) => props.inputWidth && `width: ${props.inputWidth}%;`};
  ${(props: InputProps) =>
    props.inputHeight && `height: ${props.inputHeight}%;`};
`;
