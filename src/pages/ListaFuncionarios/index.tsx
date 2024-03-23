import React, { useState } from "react";
import { Container, Section1, Section2, Section3, Section4 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function ListaFuncionarios() {
  const navigate = useNavigate();
  const handleCadastro = () => {
    navigate("/cadastro-funcionario");
  };
  const dataList = [
    {
      cpffuncionario: "78978978988",
      nomefuncionario: "jurivaldis da jurivilda",
      filial: "5 - oeste",
      departamento: "rh",
    },
    {
      cpffuncionario: "45645645655",
      nomefuncionario: "falicilina da facilaide",
      filial: "2 - bueno",
      departamento: "financeiro",
    },
    {
      cpffuncionario: "12312312322",
      nomefuncionario: "octovidazine da octavin",
      filial: "3 - marista",
      departamento: "atendimento",
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
        <List columns={4} data={dataList} minRows={14} />
      </Section2>
      <Section3>
        <Button
          title="Cadastrar novo funcionário"
          color="#CB3C12"
          minWidth="250px"
          onClick={handleCadastro}
        />
        <Button title="Editar dados funcionário" minWidth="250px" disabled />
      </Section3>
      <Section4>
        <Button title="Cadastrar novo departamento" disabled />
      </Section4>
    </Container>
  );
}
