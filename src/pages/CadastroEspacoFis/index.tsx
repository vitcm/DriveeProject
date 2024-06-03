import React, { useState, useEffect } from "react";
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
import CheckBoxImage from "../../components/CheckboxImage";
import { DateSelect } from "../../components/SelectDate";
import {
  fetchCities,
  fetchStates,
  timeOfDay,
  weekDays,
} from "../../utils/bibli";
import CheckBox from "../../components/CheckBox";
import { ModalMessage } from "../../components/ModalMessage";
import { useNavigate } from "react-router-dom";

export function CadastroEspacoFis() {
  const navigate = useNavigate();
  const [states, setStates] = useState<string[]>([]);
  const [city, setCity] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [errorType, setErrorType] = useState<string>("");
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
    diasSemana: "",
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
      navigate("/lista-espaco-fisico");
    }
  };

  const cadastrarFilial = async () => {
    const filial = {
      nome: formData.nome,
      endereco: formData.endereco,
      complemento: formData.complemento,
      cep: formData.cep,
      uf: formData.uf,
      cidade: formData.cidade,
      valorAluguel: parseFloat(formData.valorAluguel),
      inicioContrato: formData.inicioContrato,
      fimContrato: formData.fimContrato,
      contrato: formData.imagemContrato,
    };

    const alvara = {
      alvaraFuncionamento: formData.imagemAlvFunc,
      registroComercial: formData.imagemAlvJunt,
      cnpj: formData.imagemAlvCNPJ,
      alvaraBombeiros: formData.imagemAlvBomb,
      cadDetran: formData.imagemAlvDetran,
      regSindloc: formData.imagemAlvSindloc,
      lincAmbiental: formData.imagemAlvAmb,
    };

    const horarioFuncionamento = {
      horaAbertura: formData.horarioAbertura,
      horaFechamento: formData.horarioFechamento,
      segunda: !formData.diasSemana.includes("segunda"),
      terca: !formData.diasSemana.includes("terca"),
      quarta: !formData.diasSemana.includes("quarta"),
      quinta: !formData.diasSemana.includes("quinta"),
      sexta: !formData.diasSemana.includes("sexta"),
      sabado: !formData.diasSemana.includes("sabado"),
      domingo: !formData.diasSemana.includes("domingo"),
    };

    //Cadastrar Filial
    try {
      const response = await fetch("http://localhost:8080/filial/cadastro", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filial),
      });

      if (response.ok) {
        console.log("Filial cadastrada com sucesso");
        //Cadastrar Alvará
        try {
          const response = await fetch(
            "http://localhost:8080/filial/cadastroAlvara",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(alvara),
            }
          );

          if (response.ok) {
            console.log("Alvara cadastrado com sucesso");
            //Cadastrar dia(s) e horario
            try {
              const response = await fetch(
                "http://localhost:8080/filial/cadastroDiaHorarioFilial",
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(horarioFuncionamento),
                }
              );

              if (response.ok) {
                console.log("Dia e horario cadastrado com sucesso");
                showModalResultSuccess();
              } else {
                console.error("Erro ao cadastrar dia e horario");
                setErrorType("Erro ao cadastrar dia e horario");
                showModalResultError();
                deletarAlvara();
                deletarFilial();
              }
            } catch (error) {
              console.error("Erro ao enviar requisição:", error);
              setErrorType(`Erro ao enviar requisição: ${error}`);
              showModalResultError();
              deletarAlvara();
              deletarFilial();
            }
          } else {
            console.error("Erro ao cadastrar alvara");
            setErrorType(`Erro ao cadastrar alvara`);
            showModalResultError();
            deletarFilial();
          }
        } catch (error) {
          console.error("Erro ao enviar requisição:", error);
          setErrorType(`Erro ao enviar requisição: ${error}`);
          showModalResultError();
          deletarFilial();
        }
      } else {
        console.error("Erro ao cadastrar filial");
        setErrorType(`Erro ao cadastrar filial`);
        showModalResultError();
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
      setErrorType(`Erro ao enviar requisição: ${error}`);
      showModalResultError();
    }
  };

  const deletarFilial = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/filial/deletarFilial",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Filial deletada com sucesso");
      } else {
        console.error("Erro ao deletar filial");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  const deletarAlvara = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/filial/deletarAlvara",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Alvara deletado com sucesso");
      } else {
        console.error("Erro ao deletar alvara");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
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

  //dados que entram pro form para finalizar o upload de dados da pág
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
    imagemContrato: "",
    imagemAlvFunc: "",
    imagemAlvJunt: "",
    imagemAlvCNPJ: "",
    imagemAlvBomb: "",
    imagemAlvAmb: "",
    imagemAlvDetran: "",
    imagemAlvSindloc: "",
    diasSemana: "",
  });

  // mudança de input
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //add imagem - ainda não funciona
  const handleAddImage = (imagePath: string, imageName: string) => {
    setFormData({ ...formData, [imageName]: imagePath });
  };

  const handleAddDiasSemana = (diasSemana: string) => {
    setFormData({ ...formData, diasSemana: diasSemana });
  };

  // mudança de data
  const handleDateInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //Faz o submit dos dados da página
  const handleSubmit = () => {
    let hasError = false;
    setErrors({
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
      diasSemana: "",
    });

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

    if (!formData.diasSemana) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        diasSemana: "É obrigatório marcar dias de funcionamento!",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    cadastrarFilial();
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
        <Text>Anexo de imagens</Text>
        <Options>
          <TextDoc>Contrato:</TextDoc>
          <CheckBoxImage
            label="Contrato"
            onSave={(path) => handleAddImage(path, "imagemContrato")}
            name="imagemTeste"
            value={formData.imagemContrato}
          />
        </Options>
        <TextDoc>Alvarás:</TextDoc>
        <Options>
          <CheckBoxImage
            label="Alvará de funcionamento"
            onSave={(path) => handleAddImage(path, "imagemAlvFunc")}
            name="imagemTeste"
            value={formData.imagemAlvFunc}
          />
          <CheckBoxImage
            label="Registro na junta comercial"
            onSave={(path) => handleAddImage(path, "imagemAlvJunt")}
            name="imagemTeste"
            value={formData.imagemAlvJunt}
          />
          <CheckBoxImage
            label="Inscrição no CNPJ"
            onSave={(path) => handleAddImage(path, "imagemAlvCNPJ")}
            name="imagemTeste"
            value={formData.imagemAlvCNPJ}
          />
          <CheckBoxImage
            label="Alvará do corpo de bombeiros"
            onSave={(path) => handleAddImage(path, "imagemAlvBomb")}
            name="imagemTeste"
            value={formData.imagemAlvBomb}
          />
          <CheckBoxImage
            label="Licença ambiental"
            onSave={(path) => handleAddImage(path, "imagemAlvAmb")}
            name="imagemTeste"
            value={formData.imagemAlvAmb}
          />
          <CheckBoxImage
            label="Cadastro no DETRAN"
            onSave={(path) => handleAddImage(path, "imagemAlvDetran")}
            name="imagemTeste"
            value={formData.imagemAlvDetran}
          />
          <CheckBoxImage
            label="Registro no SINDLOC"
            onSave={(path) => handleAddImage(path, "imagemAlvSindloc")}
            name="imagemTeste"
            value={formData.imagemAlvSindloc}
          />
        </Options>
      </Section2>
      <Section3>
        <ErrorColumn>
          <Select
            title="Horário de abertura:"
            options={timeOfDay()}
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
            options={timeOfDay()}
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
        <ErrorColumn>
          <CheckBox options={weekDays()} onChange={handleAddDiasSemana} />
          {errors.diasSemana && (
            <ErrorTag style={{ marginTop: "125px" }}>
              {errors.diasSemana}
            </ErrorTag>
          )}
        </ErrorColumn>
      </Section4>
      <Section5>
        <Button
          title="Registrar espaço"
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
