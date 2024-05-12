import React, { useState } from "react";
import { Container, Section1, Section2, Section3 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Button } from "../../components/Button";

export function ListaReserva() {
  const dataList = [
    {
      nomeCarro: "A8",
      placa: "aaa1a11",
      cpfCliente: "22233311122",
      dataRetirada: "25/03/2024",
      filial: "5 - Oeste",
    },
    {
      nomeCarro: "Mustang",
      placa: "bbb2b22",
      cpfCliente: "44455566655",
      dataRetirada: "18/05/2024",
      filial: "1 - Guanabara",
    },
    {
      nomeCarro: "Flying Spur",
      placa: "ccc3c33",
      cpfCliente: "77788899988",
      dataRetirada: "03/09/2024",
      filial: "3 - Marista",
    },
  ];
  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  return (
    <Container>
      <Section1>
        <SearchInput title="" type="text" />
        <Select title="Filtro:" options={options} />
      </Section1>
      <Section2>
        <List columns={4} data={dataList} minRows={18} />
      </Section2>
      <Section3>
        <Button title="Acessar reservas" $minWidth="250px" disabled />
      </Section3>
    </Container>
  );
}
