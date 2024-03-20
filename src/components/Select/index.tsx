import React from "react";
import { Container, Title, ArrowDown } from "./style";

interface SelectProps {
  title: string;
}

export function Select({ title }: SelectProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <ArrowDown />
    </Container>
  );
}
