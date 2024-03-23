import React, { useState } from "react";
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

export function Perfil() {
  return (
    <Container>
      <Section1>
        <ProfileImage width="80px" height="80px" />
        <Section>
          <Text>Nome:</Text>
          <Line>
            <Text>Doc:</Text>
            <Text>Nº doc:</Text>
            <Text>CNH:</Text>
            <Text>Nacionalidade:</Text>
          </Line>
          <Line>
            <Text>E-mail:</Text>
            <Text>Nascimento:</Text>
          </Line>
        </Section>
      </Section1>
      <Section2>
        <Line>
          <Text>Enndereço:</Text>
        </Line>
        <Line>
          <Text>Complemento:</Text>
          <Text>CEP:</Text>
          <Text>UF:</Text>
          <Text>Cidade:</Text>
        </Line>
      </Section2>
      <Section3>
        <Title title="EMERGÊNCIA" />
        <Line>
          <Text>Contato de emergência:</Text>
        </Line>
        <Line>
          <Text>País de residência:</Text>
          <Text>Telefone:</Text>
        </Line>
      </Section3>
      <Section4>
        <Title title="EMPRESA" />
        <Text>Local de atuação</Text>
        <Text>Equipe:</Text>
      </Section4>
      <Section5>
        <Title
          title="PARA ALTERAÇÃO DE DADOS PESSOAIS, PROCURAR O RH."
          color="#C3C3C3"
          titleColor=""
          maxWidth="600px"
        />
      </Section5>
      <Section4>
        <Title title="SEGURANÇA" />
        <Text>Senha:</Text>
      </Section4>
      <Section5>
        <Button title="Editar senha" minWidth="250px" disabled />
      </Section5>
    </Container>
  );
}
