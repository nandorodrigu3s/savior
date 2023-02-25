import styled from 'styled-components/native';

export interface ContainerProps {
  hasPadding?: boolean;
  hasBorder?: boolean;
  addFlex?: number;
  justifyCon?: boolean;
  justifyBetween?: boolean;
  alignIt?: boolean;
  noFlex?: boolean;
  containerWidth?: number;
  containerHeight?: number;
  direction?: string;
  bgColor?: string;
  margin?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

export const Container = styled.View<ContainerProps>`
  ${(props: ContainerProps) =>
    props.bgColor && `background-color: ${props.bgColor};`};
  ${(props: ContainerProps) =>
    props.direction && `flex-direction: ${props.direction};`};
  ${(props: ContainerProps) => props.justifyCon && 'justify-content: center'};
  ${(props: ContainerProps) =>
    props.justifyBetween && 'justify-content: space-between'};
  ${(props: ContainerProps) => props.alignIt && 'align-items: center'};
  ${(props: ContainerProps) =>
    props.containerHeight ? `height: ${props.containerHeight}%;` : 'auto'};
  ${(props: ContainerProps) =>
    props.containerWidth && `width: ${props.containerWidth}%;`};
  ${(props: ContainerProps) =>
    !props.noFlex
      ? props.addFlex
        ? `flex: ${props.addFlex};`
        : 'flex-grow: 1;'
      : null};
  ${(props: ContainerProps) => props.hasBorder && 'border: 1px solid #CCCED9;'};
  ${(props: ContainerProps) => props.hasPadding && 'padding: 12px'};
  ${(props: ContainerProps) => props.margin && `margin: ${props.margin}px`};
  ${(props: ContainerProps) => props.mt && `margin-top: ${props.mt}px`};
  ${(props: ContainerProps) => props.mr && `margin-right: ${props.mr}px`};
  ${(props: ContainerProps) => props.mb && `margin-bottom: ${props.mb}px`};
  ${(props: ContainerProps) => props.ml && `margin-left: ${props.ml}px`};
  ${(props: ContainerProps) => props.pt && `padding-top: ${props.pt}px`};
  ${(props: ContainerProps) => props.pr && `padding-right: ${props.pr}px`};
  ${(props: ContainerProps) => props.pb && `padding-bottom: ${props.pb}px`};
  ${(props: ContainerProps) => props.pl && `padding-left: ${props.pl}px`};
`;
