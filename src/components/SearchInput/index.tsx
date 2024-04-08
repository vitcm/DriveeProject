import React, { useState } from "react";
import { Container, Title, InputInsert, Search } from "./style";

interface SearchInputProps {
  title?: string;
  type: "text" | "number";
}

export function SearchInput({ title, type }: SearchInputProps) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <InputInsert type={type} placeholder="Pesquise aqui" />
      <Search />
    </Container>
  );
}
