import styled from 'styled-components/native';

interface InputProps {
  hasBorder?: boolean;
  hasBorderL?: boolean;
  radiusValue?: number;
  inputWidth?: number;
  inputHeight?: number;
}

export const Input = styled.TextInput<InputProps>`
  padding: ${props => `${props.theme.size.small}px`};
  text-decoration: none;
  outline: none;
  padding-top: 5px;
  font-family: ${props => props.theme.fontFamily.interRegular};
  font-size: ${props => `${props.theme.size.default}px`};
  ${props => props.hasBorder && 'border: 1px solid black;'};
  ${props => props.hasBorderL && 'border-left-width: 1px;'};
  ${props => props.hasBorderL && 'border-left-color: #CCCED9;'};
  ${props => props.radiusValue && `border-radius: ${props.radiusValue}px;`};
  ${props => props.inputWidth && `width: ${props.inputWidth}%;`};
  ${props => props.inputHeight && `height: ${props.inputHeight}%;`};
`;
