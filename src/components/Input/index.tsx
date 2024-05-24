import React, { useState } from "react";
import { Container, Title, InputInsert } from "./style";

interface InputProps {
  title: string;
  type: "text" | "number" | "password";
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ title, type, name, value, onChange }: InputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <InputInsert
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Digite aqui"
      />
    </Container>
  );
}
