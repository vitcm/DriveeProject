import React, { useState } from "react";
import { Container, Section, Text, Line } from "./style";
import { Button } from "../../components/Button";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";

export function ControleFrota() {
  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  return (
    <Container>
      <Button title="Ir para gestão de estoque" $minWidth="100%" disabled />
      <Section>
        <Text>
          Para cadastrar condições atuais de um carro e manutenção, digite a
          placa ou chassi do veículo desejado abaixo.
        </Text>
        <Line>
          <SearchInput title="" type="text" />
          <Select title="Filtro:" options={options} />
        </Line>
        <Button title="Manutenção" $minWidth="100%" disabled />
      </Section>
      <Section>
        <Text>
          Para cadastrar carro em um espaço físico, ou alterar a localização do
          carro, digite a placa ou chassi do veículo desejado abaixo.
        </Text>
        <Line>
          <SearchInput title="" type="text" />
          <Select title="Filtro:" options={options} />
        </Line>
        <Button title="Manutenção" $minWidth="100%" disabled />
      </Section>
    </Container>
  );
}
