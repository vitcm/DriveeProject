import React from "react";
import { Container, Title, InputInsert, Search } from "./style";

interface SearchInputProps {
  title?: string;
  type: "text" | "number";
  onChange?: (value: string) => void;
}

export function SearchInput({ title, type, onChange }: SearchInputProps) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <InputInsert
        type={type}
        placeholder="Pesquise aqui"
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      <Search />
    </Container>
  );
}
