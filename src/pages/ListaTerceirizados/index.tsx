import React, { useEffect, useState } from "react";
import { Container, Section1, Section2, Section3, Section4 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Terceiro } from "../../interfaces";
import { formatCNPJ } from "../../utils/bibli";

interface TerceiroList {
  cnpj: string;
  nome: string;
  areaAtuacao: string;
  status: string;
}

export function ListaTerceirizados() {
  const navigate = useNavigate();
  const [terceirizadoListados, setTerceirizadoListados] = useState<Terceiro[]>(
    []
  );
  const [showTerceirizado, setShowTerceirizado] = useState<TerceiroList[]>([]);

  const handleCadastro = () => {
    navigate("/cadastro-terceiros");
  };

  const listarTerceiros = async () => {
    try {
      const response = await fetch("http://localhost:8080/terceiro/listar", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTerceirizadoListados(data);
        console.log("data", data);
      } else {
        console.error("Erro ao listar empresas terceirizadas");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  useEffect(() => {
    const filteredTerceiros = terceirizadoListados.map((terceiros) => ({
      cnpj: formatCNPJ(terceiros.cnpj),
      nome: terceiros.nomeEmpresa,
      areaAtuacao: terceiros.areaAtuacao,
      status: terceiros.ativo,
    }));
    setShowTerceirizado(filteredTerceiros);
  }, [terceirizadoListados]);

  useEffect(() => {
    listarTerceiros();
  }, []);

  return (
    <Container>
      <Section1>
        <SearchInput title="" type="text" />
      </Section1>
      <Section2>
        <List columns={4} data={showTerceirizado} minRows={14} />
      </Section2>
      <Section3>
        <Button
          title="Cadastrar nova empresa terceirizada"
          color="#CB3C12"
          $minWidth="250px"
          onClick={handleCadastro}
        />
        <Button
          title="Editar dados empresa tereceirizada"
          $minWidth="250px"
          disabled
        />
      </Section3>
    </Container>
  );
}
