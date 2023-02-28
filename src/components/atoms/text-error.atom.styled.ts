import styled from 'styled-components/native';

interface TextErrorProps {
  color?: string;
  fontSize?: number;
}

export const TextError = styled.Text<TextErrorProps>`
  font-weight: 700;
  ${props => props.fontSize && `font-size: ${props.fontSize}px`};
  color: ${(props: TextErrorProps) =>
    props.color ? `${props.color};` : '#E13000'};
`;
