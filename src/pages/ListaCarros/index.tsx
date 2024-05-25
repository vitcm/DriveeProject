import { useEffect, useState } from "react";
import { Container, Section1, Section2, Section3 } from "./style";
import { SearchInput } from "../../components/SearchInput";
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
  const [searchCarText, setSearchCarText] = useState("");

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

  const handleSearchCarChange = (value: string) => {
    setSearchCarText(value);
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

  const filteredSavedCars = filterData(showCarros || [], searchCarText);

  return (
    <Container>
      <Section1>
        <SearchInput title="" type="text" onChange={handleSearchCarChange} />
      </Section1>
      <Section2>
        <List columns={4} data={filteredSavedCars} minRows={18} />
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
