import React, { useState } from "react";
import { Container, Section1, Section2 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Title } from "../../components/Title";

export function Historico() {
  const dataList = [
    {
      codigoReserva: "00001569",
      CPF: "11122233322",
      carro: "A8",
      dataReserva: "23/03/2024",
    },
    {
      codigoReserva: "00000124",
      CPF: "22233311122",
      carro: "Mustang",
      dataReserva: "05/02/2024",
    },
    {
      codigoReserva: "00062584",
      CPF: "7778889977",
      carro: "Flying Spur",
      dataReserva: "15/01/2024",
    },
  ];
  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  return (
    <Container>
      <Title
        title="HISTÓRICO RESERVAS"
        color="#c3c3c3"
        $titleColor={"#374957"}
      />
      <Section1>
        <SearchInput title="" type="text" />
        <Select title="Filtro:" options={options} />
      </Section1>
      <Section2>
        <List columns={4} data={dataList} minRows={20} />
      </Section2>
    </Container>
  );
}
