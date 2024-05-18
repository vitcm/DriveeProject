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
  Options,
  TextDiv,
  TextDoc,
  OptionsContrato,
  ErrorColumn,
  ErrorTag,
} from "./style";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { fetchCities, fetchStates, occupationArea } from "../../utils/bibli";
import { DateSelect } from "../../components/SelectDate";
import CheckboxImage from "../../components/CheckboxImage";
import CheckBox from "../../components/CheckBox";
import TextBox from "../../components/TextBox";

export function CadastroTerceiros() {
  const [states, setStates] = useState<string[]>([]);
  const [city, setCity] = useState<string[]>([]);
  const [country, setCountry] = useState<string[]>([]);

  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  const optionsServiços1 = [
    "Troca de óleo e filtro",
    "Troca de filtro de ar",
    "Troca de filtro de combustível",
    "Troca de filtro de cabine",
    "Inspeção de freios",
    "Troca de pastilhas e discos de freio",
    "Alinhamento e balanceamento",
  ];
  const optionsServiços2 = [
    "Troca de pneus",
    "Inspeção e troca de fluidos",
    "Troca de correias",
    "Inspeção e substituição de peças desgastadas",
    "Trocas de velas de ignição",
    "Verificação de bateria",
  ];
  const optionsServiços3 = [
    "Inspeção do sistema de ar condicionado",
    "Diagnóstico de problemas",
    "Outros. Especifique:",
  ];

  const [errors, setErrors] = useState({
    nome: "",
    cnpj: "",
    endereco: "",
    complemento: "",
    cep: "",
    uf: "",
    cidade: "",
    telefone: "",
    inicioContrato: "",
    fimContrato: "",
    responsavel: "",
    areaAtuacao: "",
    contrato: "",
    servicos: "",
  });

  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    endereco: "",
    complemento: "",
    cep: "",
    uf: "",
    cidade: "",
    telefone: "",
    inicioContrato: "",
    fimContrato: "",
    responsavel: "",
    areaAtuacao: "",
    contrato: "",
    servicos: "",
  });

  // mudança de input
  const handleInputChange = (event: any) => {
    console.log("event", event.target);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // mudança de data
  const handleDateInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //add imagem - ainda não funciona
  const handleAddImage = (imagePath: string, imageName: string) => {
    setFormData({ ...formData, [imageName]: imagePath });
  };

  const handleAddServicos = (servicos: string) => {
    setFormData({ ...formData, servicos: servicos });
  };

  //carregar dados do select de ufs
  async function stateSet() {
    const options = await fetchStates();
    const stateCodesAndNames = options.map((x: any) => `${x.sigla}-${x.nome}`);
    stateCodesAndNames.sort((a: any, b: any) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    setStates(stateCodesAndNames);
  }

  //carregar dados do select de cidades
  async function citySet() {
    const ufSigla = formData.uf.split("-")[0];
    const options = await fetchCities(ufSigla);
    const citiesNames = options.map((x: any) => x.nome);
    setCity(citiesNames);
  }

  //Faz o submit dos dados da página
  const handleSubmit = () => {
    let hasError = false;
    setErrors({
      nome: "",
      cnpj: "",
      endereco: "",
      complemento: "",
      cep: "",
      uf: "",
      cidade: "",
      telefone: "",
      inicioContrato: "",
      fimContrato: "",
      responsavel: "",
      areaAtuacao: "",
      contrato: "",
      servicos: "",
    });

    // Verifica se os campos obrigatórios estão preenchidos
    if (!formData.nome) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nome: "Nome é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.cnpj) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cnpj: "CNPJ é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.endereco) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        endereco: "Endreço é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.complemento) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        complemento: "Complemento é obrigatório!",
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
        cidade: "Cidade é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.telefone) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        telefone: "Telefone é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.inicioContrato) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        inicioContrato: "Data de início é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.fimContrato) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fimContrato: "Data de fim é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.responsavel) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        responsavel: "Responsável é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.areaAtuacao) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        areaAtuacao: "Área de atuação é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.contrato) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contrato: "Contrato obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.servicos) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        servicos: "É obrigatório registrar os serviços oferecidos.",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    console.log("Dados do formulário:", formData);
  };

  useEffect(() => {
    stateSet();
  }, []);

  useEffect(() => {
    citySet();
  }, [formData.uf]);

  return (
    <Container>
      <Section1>
        <ErrorColumn>
          <Input
            title="Nome:"
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
          {errors.nome && <ErrorTag>{errors.nome}</ErrorTag>}
        </ErrorColumn>
        <ErrorColumn>
          <Input
            title="CNPJ:"
            type="text"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleInputChange}
          />
          {errors.cnpj && <ErrorTag>{errors.cnpj}</ErrorTag>}
        </ErrorColumn>
        <ErrorColumn>
          <Input
            title="Endereço:"
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleInputChange}
          />
          {errors.endereco && <ErrorTag>{errors.endereco}</ErrorTag>}
        </ErrorColumn>
        <Line>
          <ErrorColumn>
            <Input
              title="Complemento:"
              type="text"
              name="complemento"
              value={formData.complemento}
              onChange={handleInputChange}
            />
            {errors.complemento && <ErrorTag>{errors.complemento}</ErrorTag>}
          </ErrorColumn>
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
              options={states}
              name="uf"
              value={formData.uf}
              onChange={handleInputChange}
            />
            {errors.uf && <ErrorTag>{errors.uf}</ErrorTag>}
          </ErrorColumn>
          <ErrorColumn>
            <Select
              title="Cidade:"
              options={city}
              name="cidade"
              value={formData.cidade}
              onChange={handleInputChange}
              disabled={!city.length}
            />
            {errors.cidade && <ErrorTag>{errors.cidade}</ErrorTag>}
          </ErrorColumn>
        </Line>
        <Line>
          <ErrorColumn>
            <Input
              title="Telefone:"
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
            />
            {errors.telefone && <ErrorTag>{errors.telefone}</ErrorTag>}
          </ErrorColumn>
          <ErrorColumn>
            <DateSelect
              title="Início:"
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
              title="Fim:"
              name="fimContrato"
              value={formData.fimContrato}
              onChange={(e) => handleDateInputChange(e, "fimContrato")}
            />
            {errors.inicioContrato && (
              <ErrorTag>{errors.inicioContrato}</ErrorTag>
            )}
          </ErrorColumn>
        </Line>
        <Line>
          <ErrorColumn>
            <Input
              title="Responsável:"
              type="text"
              name="responsavel"
              value={formData.responsavel}
              onChange={handleInputChange}
            />
            {errors.responsavel && <ErrorTag>{errors.responsavel}</ErrorTag>}
          </ErrorColumn>
          <ErrorColumn>
            <Select
              title="Área de atuação:"
              options={occupationArea()}
              name="areaAtuacao"
              value={formData.areaAtuacao}
              onChange={handleInputChange}
            />
            {errors.areaAtuacao && <ErrorTag>{errors.areaAtuacao}</ErrorTag>}
          </ErrorColumn>
        </Line>
      </Section1>
      <Section2>
        <Text>Anexo de imagens</Text>
        <OptionsContrato>
          <ErrorColumn>
            <CheckboxImage
              label="Contrato"
              onSave={(path) => handleAddImage(path, "contrato")}
              name="contrato"
              value={formData.contrato}
            />
            {errors.contrato && <ErrorTag>{errors.contrato}</ErrorTag>}
          </ErrorColumn>
        </OptionsContrato>
        <Text>Serviços:</Text>
        <Options>
          <ErrorColumn>
            <TextBox
              height={40}
              name="servicos"
              value={formData.servicos}
              onChange={handleInputChange}
            />
            {errors.servicos && <ErrorTag>{errors.servicos}</ErrorTag>}
          </ErrorColumn>
        </Options>
      </Section2>
      <Section5>
        <Button
          title="Registrar manutenção"
          $minWidth="250px"
          type="button"
          onClick={handleSubmit}
        />
      </Section5>
    </Container>
  );
}
