import React, { useState } from "react";
import { Container, Section1, Section2, Section3 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function ListaCarros() {
  const navigate = useNavigate();
  const handleCadastro = () => {
    navigate("/cadastro-carro");
  };
  const dataList = [
    {
      nomeCarro: "A8",
      placa: "aaa1a11",
      filial: "5 - Oeste",
      status: "Disponível",
    },
    {
      nomeCarro: "Mustang",
      placa: "bbb2b22",
      filial: "1 - Guanabara",
      status: "Alugado",
    },
    {
      nomeCarro: "Flying Spur",
      placa: "ccc3c33",
      filial: "3 - Marista",
      status: "Manutenção",
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
        <Button
          title="Cadastrar novo carro"
          color="#CB3C12"
          minWidth="250px"
          onClick={handleCadastro}
        />
        <Button title="Editar dados carro" minWidth="250px" disabled />
      </Section3>
    </Container>
  );
}
