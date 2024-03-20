import React, { useState } from "react";
import { Container, Title, InputInsert } from "./style";

interface InputProps {
  title: string;
  type: "text" | "number";
}

export function Input({ title, type }: InputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <InputInsert type={type} placeholder="Digite aqui" />
    </Container>
  );
}
