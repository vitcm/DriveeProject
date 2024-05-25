import React, { useEffect, useState } from "react";
import {
  Container,
  Section1,
  Section2,
  Section5,
  Text,
  Line,
  Options,
  OptionsContrato,
  ErrorColumn,
  ErrorTag,
} from "./style";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import {
  fetchCities,
  fetchStates,
  occupationArea,
  statusTerceirizado,
} from "../../utils/bibli";
import { DateSelect } from "../../components/SelectDate";
import CheckboxImage from "../../components/CheckboxImage";
import TextBox from "../../components/TextBox";
import { useNavigate } from "react-router-dom";
import { ModalMessage } from "../../components/ModalMessage";

export function CadastroTerceiros() {
  const navigate = useNavigate();
  const [states, setStates] = useState<string[]>([]);
  const [city, setCity] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [errorType, setErrorType] = useState<string>("");

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
    status: "",
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
    status: "",
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
      navigate("/lista-terceiros");
    }
  };

  const cadastrarTerceirizada = async () => {
    const terceiros = {
      nomeEmpresa: formData.nome,
      cnpj: formData.cnpj,
      inicioContrato: formData.inicioContrato,
      fimContrato: formData.fimContrato,
      funcionario: formData.responsavel,
      contrato: formData.areaAtuacao,
      areaAtuacao: formData.areaAtuacao,
      ativo: formData.status,
    };

    const enderecoTerceiro = {
      endereco: formData.endereco,
      complemento: formData.complemento,
      cep: formData.cep,
      cidade: formData.cidade,
      uf: formData.uf,
    };

    const telefoneTerceiro = {
      telefone: formData.telefone,
    };

    const servicosTerceiro = {
      servico: formData.servicos,
    };

    //Cadastrar Filial
    try {
      const response = await fetch("http://localhost:8080/terceiros/cadastro", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(terceiros),
      });

      if (response.ok) {
        console.log("Empresa terceirizada cadastrada com sucesso");
        try {
          const response = await fetch(
            "http://localhost:8080/terceiros/cadastroEndereco",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(enderecoTerceiro),
            }
          );

          if (response.ok) {
            console.log("Endereço cadastrado com sucesso");
            try {
              const response = await fetch(
                "http://localhost:8080/terceiros/cadastroTelefone",
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(telefoneTerceiro),
                }
              );

              if (response.ok) {
                console.log("Telefone cadastrado com sucesso");
                try {
                  const response = await fetch(
                    "http://localhost:8080/terceiros/cadastroServico",
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(servicosTerceiro),
                    }
                  );

                  if (response.ok) {
                    console.log("Serviços cadastrados com sucesso");
                    showModalResultSuccess();
                  } else {
                    console.error("Erro ao cadastrar serviços");
                    setErrorType("Erro ao cadastrar serviços");
                    showModalResultError();
                    deletarTelefone();
                    deletarEndereco();
                    deletarEmpresaTerceirizada();
                  }
                } catch (error) {
                  console.error("Erro ao enviar requisição:", error);
                  setErrorType(`Erro ao enviar requisição: ${error}`);
                  showModalResultError();
                  deletarTelefone();
                  deletarEndereco();
                  deletarEmpresaTerceirizada();
                }
              } else {
                console.error("Erro ao cadastrar telefone");
                setErrorType("Erro ao cadastrar telefone");
                showModalResultError();
                deletarEndereco();
                deletarEmpresaTerceirizada();
              }
            } catch (error) {
              console.error("Erro ao enviar requisição:", error);
              setErrorType(`Erro ao enviar requisição: ${error}`);
              showModalResultError();
              deletarEndereco();
              deletarEmpresaTerceirizada();
            }
          } else {
            console.error("Erro ao cadastrar endereço");
            setErrorType(`Erro ao cadastrar endereço`);
            showModalResultError();
            deletarEmpresaTerceirizada();
          }
        } catch (error) {
          console.error("Erro ao enviar requisição:", error);
          setErrorType(`Erro ao enviar requisição: ${error}`);
          showModalResultError();
          deletarEmpresaTerceirizada();
        }
      } else {
        console.error("Erro ao cadastrar empresa terceirizada.");
        setErrorType(`Erro ao cadastrar empresa terceirizada.`);
        showModalResultError();
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
      setErrorType(`Erro ao enviar requisição: ${error}`);
      showModalResultError();
    }
  };

  const deletarTelefone = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/terceiros/deletarTelefoneTerceiro",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Telefone deletada com sucesso");
      } else {
        console.error("Erro ao deletar telefone");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  const deletarEndereco = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/terceiros/deletarEnderecoTerceiro",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Endereço deletado com sucesso");
      } else {
        console.error("Erro ao deletar endereço");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  const deletarEmpresaTerceirizada = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/terceiros/deletarTerceiro",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Empresa terceirizada deletada com sucesso");
      } else {
        console.error("Erro ao deletar empresa");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

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
      status: "",
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

    if (!formData.status) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        status: "É obrigatório marcar status.",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    cadastrarTerceirizada();
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
        <ErrorColumn>
          <Select
            title="Status:"
            options={statusTerceirizado()}
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          />
          {errors.status && <ErrorTag>{errors.status}</ErrorTag>}
        </ErrorColumn>
      </Section2>
      <Section5>
        <Button
          title="Registrar manutenção"
          $minWidth="250px"
          type="button"
          onClick={handleSubmit}
        />
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
