import React, { useState } from "react";
import {
  Container,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  CarData,
  Line,
} from "./style";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { ProfileImage } from "../../components/ProfileImage";
import RadioButton from "../../components/RadioButton";
import { Button } from "../../components/Button";

export function CadastroCarro() {
  const optionsPassageiros = [1, 4, 5, 6];
  const optionsAirbag = [2, 4, 6, 7];
  const optionsPortas = [2, 4];
  const optionsBeneficios2 = ["Plano de saúde", "GynPass"];
  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  return (
    <Container>
      <Section1>
        <ProfileImage />
        <CarData>
          <Line>
            <Select title="Categoria:" options={options} />
            <Select title="Modelo:" options={options} />
          </Line>
          <Line>
            <Input title="Placa:" type="text" />
            <Input title="Chassi:" type="text" />
          </Line>
          <Line>
            <Select title="Cor:" options={options} />
            <Select title="Direção:" options={options} />
          </Line>
        </CarData>
      </Section1>
      <Section2>
        <Line>
          <Input title="Porta-mala:" type="number" />
          <Input title="Cilindradas:" type="number" />
          <Select title="Adaptado:" options={options} />
        </Line>
        <Line>
          <Select title="Transmissão:" options={options} />
          <Select title="Combustível:" options={options} />
          <Select title="Ano:" options={options} />
        </Line>
      </Section2>
      <Section3>
        <RadioButton options={optionsPassageiros} title="Qtde passag:" />
        <RadioButton options={optionsAirbag} title="Qtde airbag:" />
        <RadioButton options={optionsPortas} title="Qtde portas:" />
      </Section3>
      <Section4>
        <Input title="Renovação:" type="number" />
        <Input title="Taxas:" type="number" />
        <Input title="Renavam:" type="number" />
        <Input title="IPVA:" type="number" />
      </Section4>
      <Section5>
        <Input title="Valor diária:" type="number" />
      </Section5>
      <Section6>
        <Button title="Registrar carro" $minWidth="250px" />
      </Section6>
    </Container>
  );
}
