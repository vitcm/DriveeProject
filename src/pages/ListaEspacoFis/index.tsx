import { useEffect, useState } from "react";
import { Container, Section1, Section2, Section3 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Filial } from "../../interfaces";

interface FilialList {
  nome: string;
  cidade: string;
}

export function ListaEspacoFisico() {
  const navigate = useNavigate();
  const [filiaisListados, setFiliaisListados] = useState<Filial[]>([]);
  const [showFiliais, setShowFiliais] = useState<FilialList[]>([]);
  const [searchFilialText, setSearchFilialText] = useState("");

  const handleCadastro = () => {
    navigate("/cadastro-espaco-fisico");
  };

  const listarFiliais = async () => {
    try {
      const response = await fetch("http://localhost:8080/filial/listar", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFiliaisListados(data);
        console.log("data", data);
      } else {
        console.error("Erro ao listar filiais");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  useEffect(() => {
    const filteredFiliais = filiaisListados.map((filial) => ({
      nome: filial.nome,
      cidade: filial.cidade,
    }));
    setShowFiliais(filteredFiliais);
  }, [filiaisListados]);

  useEffect(() => {
    listarFiliais();
  }, []);

  const handleSearchCarChange = (value: string) => {
    setSearchFilialText(value);
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

  const filteredSavedFiliais = filterData(showFiliais || [], searchFilialText);

  return (
    <Container>
      <Section1>
        <SearchInput title="" type="text" onChange={handleSearchCarChange} />
      </Section1>
      <Section2>
        <List columns={2} data={filteredSavedFiliais} minRows={18} />
      </Section2>
      <Section3>
        <Button
          title="Cadastrar nova filial"
          color="#CB3C12"
          $minWidth="250px"
          onClick={handleCadastro}
        />
        <Button title="Editar dados filial" $minWidth="250px" disabled />
      </Section3>
    </Container>
  );
}
