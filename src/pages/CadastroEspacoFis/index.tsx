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
  Options,
  TextDiv,
  TextDoc,
} from "./style";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import CheckboxGroup from "../../components/Checkbox";





export function CadastroEspacoFis() {
  
  const cadastrarFilial = async () => {
    const filial = {
      nome: 'Nome da Filial',
      endereco: 'Endereço da Filial',
      cep: '12345-678',
      uf: 'SP',
      cidade: 'São Paulo',
      valorAluguel: 1500.00,
      inicioContrato: '2024-04-08',
      fimContrato: '2026-04-08',
      complemento: 'Complemento do endereço',
      contrato: 'Caminho'
    };

    const alvara = {
      alvaraFuncionamento: 'alvaraFuncionamento',
      registroComercial: 'registroComercial',
      cnpj: 'cnpj',
      alvaraBombeiros: 'alvaraBombeiros',
      cadDetran: 'cadDetran',
      regSindloc: 'regSindloc',
      lincAmbiental: 'lincAmbiental'
    };

    const horarioFuncionamento = {
      horaAbertura: '08:00', 
      horaFechamento: '18:00',
      segunda: false,
      terca: true,
      quarta: true,
      quinta: true,
      sexta: true,
      sabado: true,
      domingo: false
    };
  
    //Cadastrar Filial
    try {
      const response = await fetch('http://localhost:8080/filial/cadastro', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filial)
      });

      if (response.ok) {
        console.log('Filial cadastrada com sucesso');
        //Cadastrar Alvará
        try {
          const response = await fetch('http://localhost:8080/filial/cadastroAlvara', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(alvara)
          });
    
          if (response.ok) {
            console.log('Alvara cadastrado com sucesso');
            //Cadastrar dia(s) e horario
            try {
              const response = await fetch('http://localhost:8080/filial/cadastroDiaHorarioFilial', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(horarioFuncionamento)
              });
        
              if (response.ok) {
                console.log('Dia e horario cadastrado com sucesso');
              } else {
                console.error('Erro ao cadastrar dia e horario');
                deletarAlvara();
                deletarFilial();
              }
            } catch (error) {
              console.error('Erro ao enviar requisição:', error);
              deletarAlvara();
              deletarFilial();
            }
          } else {
            console.error('Erro ao cadastrar alvara');
            deletarFilial();
          }
        } catch (error) {
          console.error('Erro ao enviar requisição:', error);
          deletarFilial();
        }
      } else {
        console.error('Erro ao cadastrar filial');
      }
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
    }
  };

  const deletarFilial = async () => {
    try {
      const response = await fetch('http://localhost:8080/filial/deletarFilial', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        console.log('Filial deletada com sucesso');
      } else {
        console.error('Erro ao deletar filial');
      }
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
    }
  };

  const deletarAlvara = async () => {
    try {
      const response = await fetch('http://localhost:8080/filial/deletarAlvara', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        console.log('Alvara deletado com sucesso');
      } else {
        console.error('Erro ao deletar alvara');
      }
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
    }
  };
  

  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  const optionsAlvaras = [
    "Alvará de funcionamento",
    "Registro na junta comercial",
    "Inscrição no CNPJ",
    "Alvará do corpo de bombeiros",
    "Licença ambiental",
    "Cadastro no DETRAN",
    "Registro no SINDLOC",
  ];
  const optionsDiasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return (
    <Container>
      <Section1>
        <Input title="Nomes:" type="text" />
        <Input title="Endereço:" type="text" />
        <Line>
          <Input title="Complemento:" type="text" />
          <Input title="CEP:" type="text" />
          <Select title="UF:" options={options} />
          <Select title="Cidade:" options={options} />
        </Line>
        <Line>
          <Input title="Valor aluguel:" type="text" />
          <Select title="Início contrato:" options={options} />
          <Select title="Fim contrato:" options={options} />
        </Line>
      </Section1>
      <Section2>
        <Options>
          <Text>Contrato:</Text>
          <TextDoc style={{ marginTop: "5px" }}>
            adicionar imagem do documento
          </TextDoc>
        </Options>
        <Text>Alvarás:</Text>
        <Options>
          <CheckboxGroup options={optionsAlvaras} />
          <TextDiv>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
            <TextDoc>adicionar imagem do documento</TextDoc>
          </TextDiv>
        </Options>
      </Section2>
      <Section3>
        <Select title="Horário de abertura:" options={options} />
        <Select title="Horário de fechamento:" options={options} />
      </Section3>
      <Section4>
        <Text>Dias de funcionamento</Text>
        <CheckboxGroup options={optionsDiasSemana} />
      </Section4>
      <Section5>
        <Button title="Registrar espaço" minWidth="250px" onClick={cadastrarFilial}/>
      </Section5>
    </Container>
  );
}
