import React, { useState } from "react";
import { Container } from "./style";

interface ButtonProps {
  color?: string;
  title: string;
  height?: string;
  fontSize?: string;
  minWidth?: string;
}

export function Button({
  color,
  title,
  height,
  fontSize,
  minWidth,
}: ButtonProps) {
  return (
    <Container
      color={color}
      height={height}
      fontSize={fontSize}
      minWidth={minWidth}
    >
      {title}
    </Container>
  );
}
