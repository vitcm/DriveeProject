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
  OptionsContrato,
} from "./style";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import CheckboxGroup from "../../components/Checkbox";
import { Button } from "../../components/Button";
import TextBox from "../../components/TextBox";

export function CadastroTerceiros() {
  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  const optionsServiços1 = [
    "Troca de óleo e filtro",
    "Troca de filtro de ar",
    "Troca de filtro de combustível",
    "Troca de filtro de cabine",
    "Inspeção de freios",
    "Troca de pastilhas e discos de freio",
    "Alinhamento e balanceamento",
  ];
  const optionsServiços2 = [
    "Troca de pneus",
    "Inspeção e troca de fluidos",
    "Troca de correias",
    "Inspeção e substituição de peças desgastadas",
    "Trocas de velas de ignição",
    "Verificação de bateria",
  ];
  const optionsServiços3 = [
    "Inspeção do sistema de ar condicionado",
    "Diagnóstico de problemas",
    "Outros. Especifique:",
  ];
  return (
    <Container>
      <Section1>
        <Input title="Nome:" type="text" />
        <Input title="CNPJ:" type="text" />
        <Input title="Endereço:" type="text" />
        <Line>
          <Input title="Complemento:" type="text" />
          <Input title="CEP:" type="text" />
          <Select title="UF:" options={options} />
          <Select title="Cidade:" options={options} />
        </Line>
        <Line>
          <Input title="Telefone:" type="text" />
          <Select title="Início contrato:" options={options} />
          <Select title="Fim contrato:" options={options} />
        </Line>
        <Line>
          <Input title="Responsável::" type="text" />
          <Select title="Área de atuação:" options={options} />
        </Line>
      </Section1>
      <Section2>
        <OptionsContrato>
          <Text>Contrato:</Text>
          <TextDoc style={{ marginTop: "5px" }}>
            adicionar imagem do documento
          </TextDoc>
        </OptionsContrato>
        <Text>Serviços:</Text>
        <Options>
          <CheckboxGroup options={optionsServiços1} />
          <CheckboxGroup options={optionsServiços2} />
          <Section3>
            <CheckboxGroup options={optionsServiços3} />
            <TextBox height={40} />
          </Section3>
        </Options>
      </Section2>
      <Section5>
        <Button title="Registrar manutenção" $minWidth="250px" />
      </Section5>
    </Container>
  );
}
