import React, { useEffect, useState } from "react";
import { Container, Section1, Section2, Section3 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Carro } from "../../interfaces";

interface CarroList {
  nome: string;
  placa: string;
  categoria: string;
  status: string;
}

export function ListaCarros() {
  const navigate = useNavigate();
  const [carrosListados, setCarrosListados] = useState<Carro[]>([]);
  const [showCarros, setShowCarros] = useState<CarroList[]>([]);
  const handleCadastro = () => {
    navigate("/cadastro-carro");
  };

  const listarCarros = async () => {
    try {
      const response = await fetch("http://localhost:8080/carro/listar", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCarrosListados(data);
        console.log("data", data);
      } else {
        console.error("Erro ao listar carros");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  useEffect(() => {
    const filteredCarros = carrosListados.map((carro) => ({
      nome: carro.modelo,
      placa: carro.placa,
      categoria: carro.categoria,
      status: carro.status,
    }));
    setShowCarros(filteredCarros);
  }, [carrosListados]);

  useEffect(() => {
    listarCarros();
  }, []);

  return (
    <Container>
      <Section1>
        <SearchInput title="" type="text" />
      </Section1>
      <Section2>
        <List columns={4} data={showCarros} minRows={18} />
      </Section2>
      <Section3>
        <Button
          title="Cadastrar novo carro"
          color="#CB3C12"
          $minWidth="250px"
          onClick={handleCadastro}
        />
        <Button title="Editar dados carro" $minWidth="250px" disabled />
      </Section3>
    </Container>
  );
}
