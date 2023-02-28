import styled from 'styled-components/native';

interface InputProps {
  hasBorder?: boolean;
  hasBorderL?: boolean;
  radiusValue?: number;
  inputWidth?: number;
  inputHeight?: number;
  themeSize?: string;
  pl?: number;
}

export const Input = styled.TextInput<InputProps>`
  padding: 0;
  padding-left: ${props => (props.pl ? `${props.pl}px;` : '5px')};
  font-family: ${props => props.theme.fontFamily.interRegular};
  font-size: ${props => `${props.theme.size[props.themeSize ?? 'default']}px`};
  ${props => props.hasBorder && 'border: 1px solid black;'};
  ${props => props.hasBorderL && 'border-left-width: 1px;'};
  ${props => props.hasBorderL && 'border-left-color: #CCCED9;'};
  ${props => props.radiusValue && `border-radius: ${props.radiusValue}px;`};
  ${props => props.inputWidth && `width: ${props.inputWidth}%;`};
  ${props => props.inputHeight && `height: ${props.inputHeight}px;`};
`;
