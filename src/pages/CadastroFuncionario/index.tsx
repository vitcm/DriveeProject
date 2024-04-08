import React, { useState } from "react";
import {
  Container,
  Section1,
  PersonalData,
  Line,
  Section2,
  Section3,
  PersonalEmergency,
  Section4,
  LeftSide,
  RightSide,
  Section5,
} from "./style";
import { ProfileImage } from "../../components/ProfileImage";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Title } from "../../components/Title";
import RadioButton from "../../components/RadioButton";
import { Button } from "../../components/Button";

export function CadastroFuncionario() {
  const optionsBeneficios1 = ["VR+VT", "PIS"];
  const optionsBeneficios2 = ["Plano de saúde", "GynPass"];
  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  return (
    <Container>
      <Section1>
        <ProfileImage />
        <PersonalData>
          <Line>
            <Input title="Nome completo:" type="text" />
          </Line>
          <Line>
            <Select title="Doc:" options={options} />
            <Input title="Nº doc:" type="text" />
            <Input title="CNH:" type="text" />
            <Select title="Nacionalidade:" options={options} />
          </Line>
          <Line>
            <Input title="E-mail:" type="text" />
            <Input title="Aniversário" type="number" />
            <Input title="Tel:" type="number" />
          </Line>
        </PersonalData>
      </Section1>
      <Section2>
        <Line>
          <Input title="Endereço:" type="text" />
        </Line>
        <Line>
          <Input title="Complemento" type="text" />
          <Input title="CEP:" type="text" />
          <Select title="UF:" options={options} />
          <Input title="Cidade:" type="text" />
        </Line>
      </Section2>
      <Section3>
        <Title title="EMERGÊNCIA" />
        <PersonalEmergency>
          <Line>
            <Input title="Endereço:" type="text" />
          </Line>
          <Line>
            <Select title="País de residência:" options={options} />
            <Input title="Telefone:" type="number" />
          </Line>
        </PersonalEmergency>
      </Section3>
      <Section4>
        <LeftSide>
          <Title title="EMPRESA" />
          <Line>
            <Select title="Local de atuação:" options={options} />
          </Line>
          <Line>
            <Select title="Departamento:" options={options} />
          </Line>
        </LeftSide>
        <RightSide>
          <Title title="DADOS TRABALHISTAS" />
          <Line>
            <Input title="Carteira:" type="number" />
            <Input title="PIS:" type="number" />
          </Line>
          <Line>
            <Input title="Título eleitor:" type="number" />
            <Input title="Certidão casamento:" type="number" />
          </Line>
        </RightSide>
      </Section4>
      <Section5>
        <LeftSide>
          <Title title="CONTRATO" />
          <Line>
            <Input title="Salário:" type="number" />
            <Select title="Cargo:" options={options} />
          </Line>
          <Line>
            <Input title="Carga horária:" type="number" />
            <Input title="Dias da semana:" type="number" />
          </Line>
          <Line>
            <Select title="Início:" options={options} />
            <Select title="Fim:" options={options} />
          </Line>
        </LeftSide>
        <RightSide>
          <Title title="BENEFÍCIOS" />
          <Line>
            <RadioButton options={optionsBeneficios1} />
          </Line>
          <Line>
            <RadioButton options={optionsBeneficios2} />
          </Line>
          <Title title="STATUS" />
          <Line>
            <Select title="Situação:" options={options} />
            <Button title="Registrar funcionário" minWidth="250px" />
          </Line>
        </RightSide>
      </Section5>
    </Container>
  );
}
