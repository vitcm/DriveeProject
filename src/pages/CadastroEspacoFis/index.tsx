import React, { useState } from "react";
import {
  Container,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Text,
  Line,
  Options,
  TextDiv,
  TextDoc,
} from "./style";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import CheckboxGroup from "../../components/Checkbox";

export function CadastroEspacoFis() {
  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  const optionsAlvaras = [
    "Alvará de funcionamento",
    "Registro na junta comercial",
    "Inscrição no CNPJ",
    "Alvará do corpo de bombeiros",
    "Licença ambiental",
    "Cadastro no DETRAN",
    "Registro no SINDLOC",
  ];
  const optionsDiasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return (
    <Container>
      <Section1>
        <Input title="Nomes:" type="text" />
        <Input title="Endereço:" type="text" />
        <Line>
          <Input title="Complemento:" type="text" />
          <Input title="CEP:" type="text" />
          <Select title="UF:" options={options} />
          <Select title="Cidade:" options={options} />
        </Line>
        <Line>
          <Input title="Valor aluguel:" type="text" />
          <Select title="Início contrato:" options={options} />
          <Select title="Fim contrato:" options={options} />
        </Line>
      </Section1>
      <Section2>
        <Options>
          <Text>Contrato:</Text>
          <TextDoc style={{ marginTop: "5px" }}>
            adicionar imagem do documento
          </TextDoc>
        </Options>
        <Text>Alvarás:</Text>
        <Options>
          <CheckboxGroup options={optionsAlvaras} />
          <TextDiv>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
          </TextDiv>
        </Options>
      </Section2>
      <Section3>
        <Select title="Horário de abertura:" options={options} />
        <Select title="Horário de fechamento:" options={options} />
      </Section3>
      <Section4>
        <Text>Dias de funcionamento</Text>
        <CheckboxGroup options={optionsDiasSemana} />
      </Section4>
      <Section5>
        <Button title="Registrar espaço" minWidth="250px" />
      </Section5>
    </Container>
  );
}
