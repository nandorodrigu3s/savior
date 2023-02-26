import React from 'react';
import { Container } from '@components/atoms/container.atom.styled';
import {
  ImageStyled,
  ImageStyledProps,
} from '@components/atoms/image.atom.styled';

interface AppImageProps {
  isUri?: boolean;
  source: string;
  sourceImage: ImageStyledProps;
}

export const AppImage = (props: AppImageProps) => {
  return (
    <Container>
      <ImageStyled
        source={props.isUri ? { uri: props.source } : +props.source}
        imageHeight={props.sourceImage.imageHeight}
        imageWidth={props.sourceImage.imageWidth}
        isCircle={props.sourceImage.isCircle}
        isSquare={props.sourceImage.isSquare}
        bgColor={props.sourceImage.bgColor}
      />
    </Container>
  );
};
