import React, { useEffect, useState } from "react";
import { Container, Section1, Section2, Section3, Section4 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Funcionario } from "../../interfaces";
import { formatCPF } from "../../utils/bibli";

interface FuncionarioList {
  cpf: string;
  nome: string;
  filial: string;
  departamento: string;
}

export function ListaFuncionarios() {
  const navigate = useNavigate();
  const [funcionariosListados, setFuncionariosListados] = useState<
    Funcionario[]
  >([]);
  const [showFuncionarios, setShowFuncionarios] = useState<FuncionarioList[]>(
    []
  );
  const [searchFuncText, setSearchFuncText] = useState("");

  const handleCadastro = () => {
    navigate("/cadastro-funcionario");
  };

  const listarFuncionarios = async () => {
    try {
      const response = await fetch("http://localhost:8080/funcionario/listar", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFuncionariosListados(data);
        console.log("data", data);
      } else {
        console.error("Erro ao listar funcionários");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  useEffect(() => {
    const filteredFuncionarios = funcionariosListados.map((func) => ({
      cpf: formatCPF(func.cpf),
      nome: func.nome,
      filial: func.localDeTrabalho,
      departamento: func.departamento,
    }));
    console.log("filtered funcionarios", filteredFuncionarios);
    setShowFuncionarios(filteredFuncionarios);
  }, [funcionariosListados]);

  useEffect(() => {
    listarFuncionarios();
  }, []);

  const handleSearchFuncChange = (value: string) => {
    setSearchFuncText(value);
  };

  const filterData = (data: Array<{ [key: string]: any }>, query: string) => {
    if (!query) return data;

    return data.filter((item) => {
      if (!item || typeof item !== "object") return false;

      return Object.values(item).some((val) =>
        val ? String(val).toLowerCase().includes(query.toLowerCase()) : false
      );
    });
  };

  const filteredSavedCars = filterData(showFuncionarios || [], searchFuncText);

  return (
    <Container>
      <Section1>
        <SearchInput title="" type="text" onChange={handleSearchFuncChange} />
      </Section1>
      <Section2>
        <List columns={4} data={filteredSavedCars} minRows={14} />
      </Section2>
      <Section3>
        <Button
          title="Cadastrar novo funcionário"
          color="#CB3C12"
          $minWidth="250px"
          onClick={handleCadastro}
        />
        <Button title="Editar dados funcionário" $minWidth="250px" disabled />
      </Section3>
      <Section4>
        <Button title="Cadastrar novo departamento" disabled />
      </Section4>
    </Container>
  );
}
