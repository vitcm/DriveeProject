import React, { useEffect, useState } from "react";
import { Container, Section1, Section2, Section3, Section4 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Funcionario } from "../../interfaces";

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
      cpf: func.cpf,
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

  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  return (
    <Container>
      <Section1>
        <SearchInput title="" type="text" />
        <Select title="Filtro:" options={options} />
      </Section1>
      <Section2>
        <List columns={4} data={showFuncionarios} minRows={14} />
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
