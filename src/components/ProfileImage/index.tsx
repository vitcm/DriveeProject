import React, { useState } from "react";
import { Container, ImgSymbol } from "./style";

interface ProfileImageProps {
  width?: string;
  height?: string;
}

export function ProfileImage({ width, height }: ProfileImageProps) {
  return (
    <Container width={width} height={height}>
      <ImgSymbol />
    </Container>
  );
}
