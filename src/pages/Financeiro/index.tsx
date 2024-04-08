import React, { useState } from "react";
import { Container, Section, Text, Line } from "./style";
import { Button } from "../../components/Button";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { AddFile } from "../../components/AddFile";
import { Input } from "../../components/Input";

export function Financeiro() {
  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  return (
    <Container>
      <Section>
        <Text>
          Para envio de comprovantes de pagamentos (NF, holerite), favor anexar
          abaixo o documento em PDF ou JPG.
        </Text>
        <Line>
          <AddFile />
          <Select title="Departamento:" options={options} />
        </Line>
        <Button title="Enviar documentação" minWidth="100%" disabled />
      </Section>
      <Section>
        <Text>
          Para solicitação de verba, favor anexar abaixo, em PDF ou JPG, o
          documento com os detalhes necessários
        </Text>
        <Line>
          <AddFile />
          <Select title="Departamento:" options={options} />
        </Line>
        <Button title="Enviar documentação" minWidth="100%" disabled />
      </Section>
      <Section>
        <Text>
          Para a equipe de financeiro, digite o seu CPF e a sua senha para
          acessar os dados do departamento.
        </Text>
        <Line>
          <Input title="CPF:" type="text" />
          <Input title="Senha:" type="text" />
        </Line>
        <Button title="Acessar financeiro" minWidth="100%" disabled />
      </Section>
    </Container>
  );
}
