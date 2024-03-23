import React, { useState } from "react";
import { Container, Section1, Section2, Section3, Section4 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export function Tarifario() {
  const dataListCarros = [
    {
      nomeCarro: "A8",
      placa: "aaa1a11",
      ano: "2024",
      valorDiaria: "R$1.250,00",
    },
    {
      nomeCarro: "Mustang",
      placa: "bbb2b22",
      ano: "1969",
      valorDiaria: "R$3.148,00",
    },
    {
      nomeCarro: "Flying Spur",
      placa: "ccc3c33",
      ano: "2023",
      valorDiaria: "R$1.539,00",
    },
  ];

  const dataListExtras = [
    {
      servico: "Bebê conforto",
      valorDiaria: "R$78,00",
    },
    {
      servico: "Caixa para cachorro pequeno",
      valorDiaria: "R$78,00",
    },
    {
      servico: "GPS Touch Screen",
      valorDiaria: "R$125,00",
    },
    {
      servico: "Seguro furto",
      valorDiaria: "R$295,00",
    },
    {
      servico: "Seguro batida",
      valorDiaria: "R$380,00",
    },
    {
      servico: "Seguro danos naturais",
      valorDiaria: "R$187,00",
    },
  ];
  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  return (
    <Container>
      <Title title="CARROS" color="#C3C3C3" titleColor={"#374957"} />
      <Section1>
        <SearchInput title="" type="text" />
        <Select title="Filtro:" options={options} />
      </Section1>
      <Section2>
        <List columns={4} data={dataListCarros} minRows={7} />
      </Section2>
      <Title title="EXTRAS" color="#C3C3C3" titleColor={"#374957"} />
      <Section3>
        <SearchInput title="" type="text" />
        <List columns={2} data={dataListExtras} minRows={4} />
      </Section3>
      <Section4>
        <Button title="Cadastrar extra" minWidth="250px" disabled />
      </Section4>
    </Container>
  );
}
