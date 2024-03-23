import React, { useState } from "react";
import { Container } from "./style";

interface TitleProps {
  title: string;
  color?: string;
  titleColor?: string;
  maxWidth?: string;
}

export function Title({ title, color, titleColor, maxWidth }: TitleProps) {
  return (
    <Container color={color} titleColor={titleColor} maxWidth={maxWidth}>
      {title}
    </Container>
  );
}
