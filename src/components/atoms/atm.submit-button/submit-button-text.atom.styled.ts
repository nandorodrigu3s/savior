import styled from 'styled-components/native';

interface SubmitButtonTextProps {
  color?: string;
  fontSize?: number;
  txtCenter?: boolean;
  regular?: boolean;
  defaultStyle?: boolean;
}

export const SubmitButtonText = styled.Text<SubmitButtonTextProps>`
  ${props => props.txtCenter && 'text-align: center;'};
  ${props => !props.defaultStyle && 'text-transform: uppercase;'};
  ${props => !props.regular && 'font-weight: bold;'};
  font-family: ${props => props.theme.fontFamily.interRegular};
  ${props => props.fontSize && `font-size: ${props.fontSize}px`};
  font-size: ${props =>
    props.fontSize ? `${props.fontSize}px` : `${props.theme.size.medium}px`};
  color: ${props => (props.color ? `${props.color}` : '#FFF')};
`;
