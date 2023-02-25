import styled from 'styled-components/native';

export interface AppInputContainerProps {
  hasPadding?: boolean;
  hasRadius?: boolean;
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

export const AppInputContainer = styled.View<AppInputContainerProps>`
  ${(props: AppInputContainerProps) =>
    props.direction && `flex-direction: ${props.direction};`};
  ${(props: AppInputContainerProps) =>
    props.justifyCon && 'justify-content: center'};
  ${(props: AppInputContainerProps) =>
    props.justifyBetween && 'justify-content: space-between'};
  ${(props: AppInputContainerProps) => props.alignIt && 'align-items: center'};
  ${(props: AppInputContainerProps) =>
    props.containerHeight ? `height: ${props.containerHeight}px;` : 'auto'};
  ${(props: AppInputContainerProps) =>
    props.containerWidth && `width: ${props.containerWidth}px;`};
  ${(props: AppInputContainerProps) =>
    props.hasBorder && 'border: 1px solid #CCCED9;'};
  ${(props: AppInputContainerProps) =>
    props.hasRadius && 'border-radius: 8px;'};
  ${(props: AppInputContainerProps) => props.hasPadding && 'padding: 8px'};
  ${(props: AppInputContainerProps) =>
    props.margin && `margin: ${props.margin}px`};
  ${(props: AppInputContainerProps) => props.mt && `margin-top: ${props.mt}px`};
  ${(props: AppInputContainerProps) =>
    props.mr && `margin-right: ${props.mr}px`};
  ${(props: AppInputContainerProps) =>
    props.mb && `margin-bottom: ${props.mb}px`};
`;
