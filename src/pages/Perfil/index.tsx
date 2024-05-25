import React, { useEffect, useState } from "react";
import {
  Container,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Text,
  Line,
  Section,
} from "./style";
import { Button } from "../../components/Button";
import { ProfileImage } from "../../components/ProfileImage";
import { Title } from "../../components/Title";
import { useLocation } from "react-router-dom";
import { Funcionario } from "../../interfaces";
import {
  formatCEP,
  formatCPF,
  formatDate,
  formatPhoneNumber,
} from "../../utils/bibli";

export function Perfil() {
  const location = useLocation();
  const [funcionario, setFuncionario] = useState<Funcionario>();
  const cpf = location.state?.cpf;
  useEffect(() => {
    const storedCpf = localStorage.getItem("cpf");
    if (cpf || storedCpf) {
      getFuncionarioByCpf(cpf || storedCpf);
    }
  }, []);

  const getFuncionarioByCpf = async (cpf: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/funcionario/cpf/${cpf}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setFuncionario(data);
        console.log("Funcionário encontrado:", data);
      } else if (response.status === 404) {
        console.error("Funcionário não encontrado");
      } else {
        console.error("Erro ao obter funcionário");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  useEffect(() => {
    getFuncionarioByCpf(cpf);
  }, []);

  const telefoneEmergencia = funcionario?.telefoneEmergencia
    ? formatPhoneNumber(funcionario.telefoneEmergencia)
    : "N/A";

  const cpfEdit = funcionario?.cpf ? formatCPF(funcionario.cpf) : "N/A";

  const dataEdit = funcionario?.dataNascimento
    ? formatDate(funcionario.dataNascimento)
    : "N/AS";

  const cepEdit = funcionario?.cep ? formatCEP(funcionario.cep) : "N/A";

  return (
    <Container>
      <Section1>
        <ProfileImage width="80px" height="80px" />
        <Section>
          <Text>{`Nome: ${funcionario?.nome}`}</Text>
          <Text>{`CPF: ${cpfEdit}`}</Text>
          <Text>{`CNH: ${funcionario?.cnh}`}</Text>
          <Text>{`Nacionalidade: ${funcionario?.nacionalidade}`}</Text>
          <Text>{`E-mail: ${funcionario?.email}`}</Text>
          <Text>{`Aniversário: ${dataEdit}`}</Text>
        </Section>
      </Section1>
      <Section2>
        <Text>{`Endereço: ${funcionario?.endereco}`}</Text>
        <Text>{`Complemento: ${funcionario?.complemento}`}</Text>
        <Text>{`CEP: ${cepEdit}`}</Text>
        <Text>{`UF: ${funcionario?.uf}`}</Text>
        <Text>{`Cidade: ${funcionario?.cidade}`}</Text>
      </Section2>
      <Section3>
        <Title title="EMERGÊNCIA" />
        <Text>{`Contato de emergência: ${funcionario?.enderecoEmergencia}`}</Text>
        <Text>{`País de residência emergência: ${funcionario?.paisResidencia}`}</Text>
        <Text>{`Telefone de emergência: ${telefoneEmergencia}`}</Text>
      </Section3>
      <Section4>
        <Title title="EMPRESA" />
        <Text>{`Local de atuação: ${funcionario?.localDeTrabalho}`}</Text>
        <Text>{`Departamento: ${funcionario?.departamento}`}</Text>
      </Section4>
      <Section5>
        <Title
          title="PARA ALTERAÇÃO DE DADOS PESSOAIS, PROCURAR O RH."
          color="#c59688"
          $titleColor=""
          $maxWidth="600px"
        />
      </Section5>
      <Section4>
        <Title title="SEGURANÇA" />
        <Text>{`Senha: ${funcionario?.senha}`}</Text>
      </Section4>
      <Section5>
        <Button title="Editar senha" $minWidth="250px" disabled />
      </Section5>
    </Container>
  );
}
