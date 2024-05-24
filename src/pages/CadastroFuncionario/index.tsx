import React, { useEffect, useState } from "react";
import {
  Container,
  Section1,
  PersonalData,
  Line,
  Section2,
  Section3,
  PersonalEmergency,
  Section4,
  LeftSide,
  RightSide,
  Section5,
  ErrorColumn,
  ErrorTag,
} from "./style";
import { ProfileImage } from "../../components/ProfileImage";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import {
  departaments,
  documentsPerson,
  fetchCities,
  fetchCountries,
  fetchStates,
  jobBenefits,
  jobSpot,
  statusEmployer,
} from "../../utils/bibli";
import { DateSelect } from "../../components/SelectDate";
import CheckBox from "../../components/CheckBox";
import { useNavigate } from "react-router-dom";
import { ModalMessage } from "../../components/ModalMessage";
import { Filial } from "../../interfaces";

export function CadastroFuncionario() {
  const navigate = useNavigate();
  const [states, setStates] = useState<string[]>([]);
  const [city, setCity] = useState<string[]>([]);
  const [country, setCountry] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [errorType, setErrorType] = useState<string>("");
  const [filiaisListados, setFiliaisListados] = useState<Filial[]>([]);
  const [showFiliaisListados, setShowFiliaisListados] = useState<string[]>([]);

  const [errors, setErrors] = useState({
    nome: "",
    nDoc: "",
    cnh: "",
    nacionalidade: "",
    email: "",
    tel: "",
    endereco: "",
    complemento: "",
    cep: "",
    uf: "",
    cidade: "",
    localAtuacao: "",
    departamento: "",
    salario: "",
    cargaHoraria: "",
    cargo: "",
    horasSemanais: "",
    inicio: "",
    fim: "",
    carteira: "",
    pis: "",
    tituloEleitor: "",
    beneficios: "",
    situacao: "",
  });

  const showModalResultError = () => {
    setModalType("error");
    setShowModal(true);
  };

  const showModalResultSuccess = () => {
    setModalType("success");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalType === "success") {
      navigate("/lista-funcionarios");
    }
  };

  const cadastrarFuncionario = async () => {
    const funcionario = {
      nome: formData.nome,
      cpf: formData.nDoc,
      cnh: formData.cnh,
      nacionalidade: formData.nacionalidade,
      celular: formData.tel,
      email: formData.email,
      senha: "123456",
      dataNascimento: formData.aniversario,
      endereco: formData.endereco,
      complemento: formData.complemento,
      cep: formData.cep,
      uf: formData.uf,
      cidade: formData.cidade,
      enderecoEmergencia: formData.enderecoEmergencia,
      paisResidencia: formData.paisResidenciaEmergencia,
      telefoneEmergencia: formData.telefoneEmergencia,
      localDeTrabalho: formData.localAtuacao,
      departamento: formData.departamento,
      carteiraDeTrabalho: formData.carteira,
      pis: formData.pis,
      tituloEleitor: formData.tituloEleitor,
      situacao: formData.situacao,
    };

    const contratoFuncionario = {
      salario: parseFloat(formData.salario),
      cargaHoraria: parseFloat(formData.cargaHoraria),
      cargo: formData.cargo,
      horasSemanais: parseFloat(formData.horasSemanais),
      inicioContrato: formData.inicio,
      fimDoContrato: formData.fim,
      beneficios: formData.beneficios,
    };

    //Cadastrar Funcionario
    try {
      const response = await fetch(
        "http://localhost:8080/funcionario/cadastro",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(funcionario),
        }
      );

      if (response.ok) {
        console.log("Funcionário cadastrado com sucesso");
        //Cadastrar Contrato
        try {
          const response = await fetch(
            "http://localhost:8080/funcionario/cadastroContrato",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contratoFuncionario),
            }
          );

          if (response.ok) {
            console.log("Contrato cadastrado com sucesso!");
            showModalResultSuccess();
          } else {
            console.error("Erro ao cadastrar contrato");
            setErrorType("Erro ao cadastrar contrato");
            showModalResultError();
            deletarFuncionario();
          }
        } catch (error) {
          console.error("Erro ao enviar requisição:", error);
          setErrorType(`Erro ao enviar requisição: ${error}`);
          showModalResultError();
          deletarFuncionario();
        }
      } else {
        console.error("Erro ao cadastrar filial");
        setErrorType("Erro ao cadastrar filial");
        showModalResultError();
        deletarFuncionario();
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
      setErrorType(`Erro ao enviar requisição: ${error}`);
      showModalResultError();
    }
  };

  const deletarFuncionario = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/funcionario/deletarFuncionario",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Funcionário deletado com sucesso");
      } else {
        console.error("Erro ao deletar funcionário");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  const listarLocaisDeAtuacao = async () => {
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
    const filteredFiliais = filiaisListados.map((filial) => filial.nome);
    setShowFiliaisListados(filteredFiliais);
  }, [filiaisListados]);

  useEffect(() => {
    listarLocaisDeAtuacao();
  }, []);

  const [formData, setFormData] = useState({
    nome: "",
    nDoc: "",
    cnh: "",
    nacionalidade: "",
    email: "",
    aniversario: "",
    tel: "",
    endereco: "",
    complemento: "",
    cep: "",
    uf: "",
    cidade: "",
    enderecoEmergencia: "",
    paisResidenciaEmergencia: "",
    telefoneEmergencia: "",
    localAtuacao: "",
    departamento: "",
    salario: "",
    cargaHoraria: "",
    cargo: "",
    horasSemanais: "",
    inicio: "",
    fim: "",
    carteira: "",
    pis: "",
    tituloEleitor: "",
    beneficios: "",
    situacao: "",
  });

  // mudança de input
  const handleInputChange = (event: any) => {
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

  const handleAddBenefits = (beneficios: string) => {
    setFormData({ ...formData, beneficios: beneficios });
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

  //carregar dados do select de paises
  async function countrySet() {
    const options = await fetchCountries();
    const countryNames = options.map((x: any) => x.name.common);
    countryNames.sort((a: any, b: any) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    setCountry(countryNames);
  }

  //Faz o submit dos dados da página
  const handleSubmit = () => {
    let hasError = false;
    setErrors({
      nome: "",
      nDoc: "",
      cnh: "",
      nacionalidade: "",
      email: "",
      tel: "",
      endereco: "",
      complemento: "",
      cep: "",
      uf: "",
      cidade: "",
      localAtuacao: "",
      departamento: "",
      salario: "",
      cargaHoraria: "",
      cargo: "",
      horasSemanais: "",
      inicio: "",
      fim: "",
      carteira: "",
      pis: "",
      tituloEleitor: "",
      beneficios: "",
      situacao: "",
    });

    // Verifica se os campos obrigatórios estão preenchidos
    if (!formData.nome) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nome: "Nome é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.nDoc) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nDoc: "Documento é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.cnh) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cnh: "CNH é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.nacionalidade) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nacionalidade: "Nacionalidade é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.tel) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        tel: "Número de telefone é obrigatório!",
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

    if (!formData.localAtuacao) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        localAtuacao: "Local de atuação é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.departamento) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        departamento: "Departamento é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.salario) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        salario: "Salário é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.cargaHoraria) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cargaHoraria: "Carga horária é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.cargo) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cargo: "Cargo é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.horasSemanais) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        horasSemanais: "Dias da semana é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.inicio) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        inicio: "Data de início é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.fim) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fim: "Data de fim é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.carteira) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        carteira: "Número da carteira é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.pis) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pis: "Númerp do PIS é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.tituloEleitor) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        tituloEleitor: "Número do título é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.beneficios) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        beneficios: "Marque os benefícios",
      }));
      hasError = true;
    }

    if (!formData.situacao) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        situacao: "Situação é obrigatória!",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    cadastrarFuncionario();
  };

  useEffect(() => {
    stateSet();
    countrySet();
  }, []);

  useEffect(() => {
    citySet();
  }, [formData.uf]);

  return (
    <Container>
      <Section1>
        <ProfileImage />
        <PersonalData>
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
          <Line>
            <ErrorColumn>
              <Input
                title="Nº doc:"
                type="text"
                name="nDoc"
                value={formData.nDoc}
                onChange={handleInputChange}
              />
              {errors.nDoc && <ErrorTag>{errors.nDoc}</ErrorTag>}
            </ErrorColumn>
            <ErrorColumn>
              <Input
                title="CNH:"
                type="text"
                name="cnh"
                value={formData.cnh}
                onChange={handleInputChange}
              />
              {errors.cnh && <ErrorTag>{errors.cnh}</ErrorTag>}
            </ErrorColumn>
            <ErrorColumn>
              <Select
                title="Nacionalidade:"
                options={country}
                name="nacionalidade"
                value={formData.nacionalidade}
                onChange={handleInputChange}
              />
              {errors.nacionalidade && (
                <ErrorTag>{errors.nacionalidade}</ErrorTag>
              )}
            </ErrorColumn>
          </Line>
          <Line>
            <ErrorColumn>
              <Input
                title="E-mail:"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <ErrorTag>{errors.nacionalidade}</ErrorTag>}
            </ErrorColumn>
            <DateSelect
              title="Aniversario:"
              name="aniversario"
              value={formData.aniversario}
              onChange={(e) => handleDateInputChange(e, "aniversario")}
            />
            <ErrorColumn>
              <Input
                title="Tel:"
                type="number"
                name="tel"
                value={formData.tel}
                onChange={handleInputChange}
              />
              {errors.tel && <ErrorTag>{errors.tel}</ErrorTag>}
            </ErrorColumn>
          </Line>
        </PersonalData>
      </Section1>
      <Section2>
        <Line>
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
        </Line>
        <Line>
          <ErrorColumn>
            <Input
              title="Complemento"
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
      </Section2>
      <Section3>
        <Title title="EMERGÊNCIA" />
        <PersonalEmergency>
          <Line>
            <Input
              title="Endereço:"
              type="text"
              name="enderecoEmergencia"
              value={formData.enderecoEmergencia}
              onChange={handleInputChange}
            />
          </Line>
          <Line>
            <Select
              title="País de residência:"
              options={country}
              name="paisResidenciaEmergencia"
              value={formData.paisResidenciaEmergencia}
              onChange={handleInputChange}
            />
            <Input
              title="Telefone:"
              type="number"
              name="telefoneEmergencia"
              value={formData.telefoneEmergencia}
              onChange={handleInputChange}
            />
          </Line>
        </PersonalEmergency>
      </Section3>
      <Section4>
        <LeftSide>
          <Title title="EMPRESA" />
          <Line>
            <ErrorColumn>
              <Select
                title="Local de atuação:"
                options={showFiliaisListados}
                name="localAtuacao"
                value={formData.localAtuacao}
                onChange={handleInputChange}
              />
              {errors.localAtuacao && (
                <ErrorTag>{errors.localAtuacao}</ErrorTag>
              )}
            </ErrorColumn>
          </Line>
          <Line>
            <ErrorColumn>
              <Select
                title="Departamento:"
                options={departaments()}
                name="departamento"
                value={formData.departamento}
                onChange={handleInputChange}
              />
              {errors.departamento && (
                <ErrorTag>{errors.departamento}</ErrorTag>
              )}
            </ErrorColumn>
          </Line>
        </LeftSide>
        <RightSide>
          <Title title="DADOS TRABALHISTAS" />
          <Line>
            <ErrorColumn>
              <Input
                title="Carteira:"
                type="number"
                name="carteira"
                value={formData.carteira}
                onChange={handleInputChange}
              />
              {errors.carteira && <ErrorTag>{errors.carteira}</ErrorTag>}
            </ErrorColumn>
            <ErrorColumn>
              <Input
                title="PIS:"
                type="number"
                name="pis"
                value={formData.pis}
                onChange={handleInputChange}
              />
              {errors.pis && <ErrorTag>{errors.pis}</ErrorTag>}
            </ErrorColumn>
          </Line>
          <Line>
            <ErrorColumn>
              <Input
                title="Título eleitor:"
                type="number"
                name="tituloEleitor"
                value={formData.tituloEleitor}
                onChange={handleInputChange}
              />
              {errors.tituloEleitor && (
                <ErrorTag>{errors.tituloEleitor}</ErrorTag>
              )}
            </ErrorColumn>
          </Line>
        </RightSide>
      </Section4>
      <Section5>
        <LeftSide>
          <Title title="CONTRATO" />
          <Line>
            <ErrorColumn>
              <Input
                title="Salário:"
                type="number"
                name="salario"
                value={formData.salario}
                onChange={handleInputChange}
              />
              {errors.salario && <ErrorTag>{errors.salario}</ErrorTag>}
            </ErrorColumn>
            <ErrorColumn>
              <Select
                title="Cargo:"
                options={jobSpot()}
                name="cargo"
                value={formData.cargo}
                onChange={handleInputChange}
              />
              {errors.cargo && <ErrorTag>{errors.cargo}</ErrorTag>}
            </ErrorColumn>
          </Line>
          <Line>
            <ErrorColumn>
              <Input
                title="Carga horária:"
                type="number"
                name="cargaHoraria"
                value={formData.cargaHoraria}
                onChange={handleInputChange}
              />
              {errors.cargaHoraria && (
                <ErrorTag>{errors.cargaHoraria}</ErrorTag>
              )}
            </ErrorColumn>
            <ErrorColumn>
              <Input
                title="Horas semanais:"
                type="number"
                name="horasSemanais"
                value={formData.horasSemanais}
                onChange={handleInputChange}
              />
              {errors.horasSemanais && (
                <ErrorTag>{errors.horasSemanais}</ErrorTag>
              )}
            </ErrorColumn>
          </Line>
          <Line>
            <ErrorColumn>
              <DateSelect
                title="Início:"
                name="inicio"
                value={formData.inicio}
                onChange={handleInputChange}
              />
              {errors.inicio && <ErrorTag>{errors.inicio}</ErrorTag>}
            </ErrorColumn>
            <ErrorColumn>
              <DateSelect
                title="Fim:"
                name="fim"
                value={formData.fim}
                onChange={handleInputChange}
              />
              {errors.fim && <ErrorTag>{errors.fim}</ErrorTag>}
            </ErrorColumn>
          </Line>
        </LeftSide>
        <RightSide>
          <Title title="BENEFÍCIOS" />
          <Line>
            <CheckBox options={jobBenefits()} onChange={handleAddBenefits} />
          </Line>
          <Title title="STATUS" />
          <Line>
            <ErrorColumn>
              <Select
                title="Situação:"
                options={statusEmployer()}
                name="situacao"
                value={formData.situacao}
                onChange={handleInputChange}
                bottomPage
              />
              {errors.situacao && <ErrorTag>{errors.situacao}</ErrorTag>}
            </ErrorColumn>
            <Button
              title="Registrar funcionário"
              $minWidth="250px"
              type="button"
              onClick={handleSubmit}
            />
          </Line>
        </RightSide>
      </Section5>
      {showModal && (
        <ModalMessage
          type={modalType}
          title={
            modalType === "error"
              ? "Ops! Tivemos um erro no cadastro."
              : "Oba, o cadastro deu certo!"
          }
          message={
            modalType === "error"
              ? `Tivemos um erro no cadastro: ${errorType}`
              : "Parabéns, seu cadastro deu certo!"
          }
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
}
