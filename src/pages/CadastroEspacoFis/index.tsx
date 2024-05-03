import React, { useState, forwardRef } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Text,
  Line,
  Column,
  Options,
  TextDiv,
  TextDoc,
  ErrorTag,
  ErrorColumn,
} from "./style";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import CheckboxGroup from "../../components/Checkbox";
import { DateSelect } from "../../components/SelectDate";

export function CadastroEspacoFis() {
  const [errors, setErrors] = useState({
    nome: "",
    endereco: "",
    cep: "",
    uf: "",
    cidade: "",
    valorAluguel: "",
    inicioContrato: "",
    fimContrato: "",
    horarioAbertura: "",
    horarioFechamento: "",
  });

  // const cadastrarFilial = async () => {
  //   const filial = {
  //     nome: "Nome da Filial",
  //     endereco: "Endereço da Filial",
  //     cep: "12345-678",
  //     uf: "SP",
  //     cidade: "São Paulo",
  //     valorAluguel: 1500.0,
  //     inicioContrato: "2024-04-08",
  //     fimContrato: "2026-04-08",
  //     complemento: "Complemento do endereço",
  //     contrato: "Caminho",
  //   };

  //   const alvara = {
  //     alvaraFuncionamento: "alvaraFuncionamento",
  //     registroComercial: "registroComercial",
  //     cnpj: "cnpj",
  //     alvaraBombeiros: "alvaraBombeiros",
  //     cadDetran: "cadDetran",
  //     regSindloc: "regSindloc",
  //     lincAmbiental: "lincAmbiental",
  //   };

  //   const horarioFuncionamento = {
  //     horaAbertura: "08:00",
  //     horaFechamento: "18:00",
  //     segunda: false,
  //     terca: true,
  //     quarta: true,
  //     quinta: true,
  //     sexta: true,
  //     sabado: true,
  //     domingo: false,
  //   };

  //   //Cadastrar Filial
  //   try {
  //     const response = await fetch("http://localhost:8080/filial/cadastro", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(filial),
  //     });

  //     if (response.ok) {
  //       console.log("Filial cadastrada com sucesso");
  //       //Cadastrar Alvará
  //       try {
  //         const response = await fetch(
  //           "http://localhost:8080/filial/cadastroAlvara",
  //           {
  //             method: "PUT",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(alvara),
  //           }
  //         );

  //         if (response.ok) {
  //           console.log("Alvara cadastrado com sucesso");
  //           //Cadastrar dia(s) e horario
  //           try {
  //             const response = await fetch(
  //               "http://localhost:8080/filial/cadastroDiaHorarioFilial",
  //               {
  //                 method: "PUT",
  //                 headers: {
  //                   "Content-Type": "application/json",
  //                 },
  //                 body: JSON.stringify(horarioFuncionamento),
  //               }
  //             );

  //             if (response.ok) {
  //               console.log("Dia e horario cadastrado com sucesso");
  //             } else {
  //               console.error("Erro ao cadastrar dia e horario");
  //               deletarAlvara();
  //               deletarFilial();
  //             }
  //           } catch (error) {
  //             console.error("Erro ao enviar requisição:", error);
  //             deletarAlvara();
  //             deletarFilial();
  //           }
  //         } else {
  //           console.error("Erro ao cadastrar alvara");
  //           deletarFilial();
  //         }
  //       } catch (error) {
  //         console.error("Erro ao enviar requisição:", error);
  //         deletarFilial();
  //       }
  //     } else {
  //       console.error("Erro ao cadastrar filial");
  //     }
  //   } catch (error) {
  //     console.error("Erro ao enviar requisição:", error);
  //   }
  // };

  // const deletarFilial = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/filial/deletarFilial",
  //       {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       console.log("Filial deletada com sucesso");
  //     } else {
  //       console.error("Erro ao deletar filial");
  //     }
  //   } catch (error) {
  //     console.error("Erro ao enviar requisição:", error);
  //   }
  // };

  // const deletarAlvara = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/filial/deletarAlvara",
  //       {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       console.log("Alvara deletado com sucesso");
  //     } else {
  //       console.error("Erro ao deletar alvara");
  //     }
  //   } catch (error) {
  //     console.error("Erro ao enviar requisição:", error);
  //   }
  // };

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

  // const schema = Yup.object().shape({
  //   nome: Yup.string().required("Nome obrigatório"),
  //   endereco: Yup.string().required("Endereço obrigatório"),
  //   cep: Yup.string().required("CEP obrigatório"),
  //   uf: Yup.string().required("UF obrigatório"),
  //   cidade: Yup.string().required("Cidade obrigatória"),
  //   valorAluguel: Yup.number().required("Valor do aluguel obrigatório"),
  //   inicioContrato: Yup.string().required("Início do contrato obrigatório"),
  //   fimContrato: Yup.string().required("Fim do contrato obrigatório"),
  //   horarioAbertura: Yup.string().required("Horário de abertura obrigatório"),
  //   horarioFechamento: Yup.string().required(
  //     "Horário de fechamento obrigatório"
  //   ),
  // });

  // const { handleSubmit, register } = useForm({
  //   resolver: yupResolver(schema),
  // });

  // const onSubmit = (data: any) => {
  //   try {
  //     console.log("OI", data);
  //   } catch (err: any) {
  //     console.log("erro:", err);
  //   }
  // };

  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    complemento: "",
    cep: "",
    uf: "",
    cidade: "",
    valorAluguel: "",
    inicioContrato: "",
    fimContrato: "",
    horarioAbertura: "",
    horarioFechamento: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    let hasError = false;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!formData.nome) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nome: "Nome é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.endereco) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        endereco: "Endereço é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.cep) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cep: "CEP é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.uf) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        uf: "UF é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.cidade) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cidade: "Cidade é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.inicioContrato) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        inicioContrato: "Data é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.fimContrato) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fimContrato: "Data é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.horarioAbertura) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        horarioAbertura: "Horário é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.horarioFechamento) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        horarioFechamento: "Horário é obrigatório!",
      }));
      hasError = true;
    }

    if (hasError) {
      // Se houver erros, não envia o formulário
      return;
    }

    console.log("Dados do formulário:", formData);
    // Lógica para enviar o formulário
  };

  return (
    <Container>
      <Section1>
        <ErrorColumn>
          <Line>
            <Input
              title="Nome:"
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
            />
          </Line>
          {errors.nome && <ErrorTag>{errors.nome}</ErrorTag>}
        </ErrorColumn>
        <ErrorColumn>
          <Line>
            <Input
              title="Endereço:"
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleInputChange}
            />
          </Line>
          {errors.endereco && <ErrorTag>{errors.endereco}</ErrorTag>}
        </ErrorColumn>
        <Line>
          <Input
            title="Complemento:"
            type="text"
            name="complemento"
            value={formData.complemento}
            onChange={handleInputChange}
          />
          <ErrorColumn>
            <Input
              title="CEP:"
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleInputChange}
            />
            {errors.cep && <ErrorTag>{errors.cep}</ErrorTag>}
          </ErrorColumn>
          <ErrorColumn>
            <Select
              title="UF:"
              options={options}
              name="uf"
              value={formData.uf}
              onChange={handleInputChange}
            />
            {errors.uf && <ErrorTag>{errors.uf}</ErrorTag>}
          </ErrorColumn>
          <ErrorColumn>
            <Select
              title="Cidade:"
              options={options}
              name="cidade"
              value={formData.cidade}
              onChange={handleInputChange}
            />
            {errors.cidade && <ErrorTag>{errors.cidade}</ErrorTag>}
          </ErrorColumn>
        </Line>
        <Line>
          <ErrorColumn>
            <Input
              title="Valor aluguel:"
              type="number"
              name="valorAluguel"
              value={formData.valorAluguel}
              onChange={handleInputChange}
            />
            {errors.valorAluguel && <ErrorTag>{errors.valorAluguel}</ErrorTag>}
          </ErrorColumn>
          <ErrorColumn>
            <DateSelect
              title="Início contrato:"
              name="inicioContrato"
              value={formData.inicioContrato}
              onChange={(e) => handleDateInputChange(e, "inicioContrato")}
            />
            {errors.inicioContrato && (
              <ErrorTag>{errors.inicioContrato}</ErrorTag>
            )}
          </ErrorColumn>
          <ErrorColumn>
            <DateSelect
              title="Fim contrato:"
              name="fimContrato"
              value={formData.fimContrato}
              onChange={(e) => handleDateInputChange(e, "fimContrato")}
            />
            {errors.fimContrato && <ErrorTag>{errors.fimContrato}</ErrorTag>}
          </ErrorColumn>
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
        <ErrorColumn>
          <Select
            title="Horário de abertura:"
            options={options}
            name="horarioAbertura"
            value={formData.horarioAbertura}
            onChange={handleInputChange}
          />
          {errors.horarioAbertura && (
            <ErrorTag>{errors.horarioAbertura}</ErrorTag>
          )}
        </ErrorColumn>
        <ErrorColumn>
          <Select
            title="Horário de fechamento:"
            options={options}
            name="horarioFechamento"
            value={formData.horarioFechamento}
            onChange={handleInputChange}
          />
          {errors.horarioFechamento && (
            <ErrorTag>{errors.horarioFechamento}</ErrorTag>
          )}
        </ErrorColumn>
      </Section3>
      <Section4>
        <Text>Dias de funcionamento</Text>
        <CheckboxGroup options={optionsDiasSemana} />
      </Section4>
      <Section5>
        <Button
          title="Registrar espaço"
          $minWidth="250px"
          type="button"
          onClick={handleSubmit}
        />
      </Section5>
    </Container>
    // </form>
  );
}
