import styled from 'styled-components/native';

export interface ImageStyledProps {
  imageWidth: number;
  imageHeight?: number;
  isSquare?: boolean;
  isCircle?: boolean;
  bgColor?: string;
}

export const ImageStyled = styled.Image<ImageStyledProps>`
  width: ${(props: ImageStyledProps) =>
    props.imageWidth ? `${props.imageWidth}px` : '0'};
  height: ${(props: ImageStyledProps) =>
    props.imageHeight ? `${props.imageHeight}px` : '0'};
  background-color: ${(props: ImageStyledProps) =>
    props.bgColor ?? 'transparent;'};
  ${(props: ImageStyledProps) =>
    (props.isSquare || props.isCircle) && `height: ${props.imageWidth}`};
  ${(props: ImageStyledProps) =>
    props.isCircle && `border-radius: ${props.imageWidth! / 2}`};
`;
