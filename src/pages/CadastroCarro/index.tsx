import React, { useEffect, useState } from "react";
import {
  Container,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  CarData,
  Line,
  ErrorColumn,
  ErrorTag,
  TextDoc,
} from "./style";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { ProfileImage } from "../../components/ProfileImage";
import RadioButton from "../../components/RadioButton";
import { Button } from "../../components/Button";
import {
  adaptationCars,
  categoryCars,
  colorCars,
  combustCars,
  direcCars,
  modelCars,
  quantityAirbags,
  quantityPassenger,
  quantityPortas,
  transmissionCars,
} from "../../utils/bibli";
import CheckBox from "../../components/CheckBox";

export function CadastroCarro() {
  const [models, setModels] = useState<string[]>([""]);
  const [errors, setErrors] = useState({
    categoria: "",
    modelo: "",
    placa: "",
    chassi: "",
    cor: "",
    direcao: "",
    portaMala: "",
    cilindradas: "",
    adaptado: "",
    transmissao: "",
    combustivel: "",
    ano: "",
    qtdePassageiros: "",
    qtdeAirbag: "",
    qtdePortas: "",
    renovacao: "",
    taxas: "",
    renavam: "",
    ipva: "",
    valorDiaria: "",
  });

  const [formData, setFormData] = useState({
    categoria: "",
    modelo: "",
    placa: "",
    chassi: "",
    cor: "",
    direcao: "",
    portaMala: "",
    cilindradas: "",
    adaptado: "",
    transmissao: "",
    combustivel: "",
    ano: "",
    qtdePassageiros: "",
    qtdeAirbag: "",
    qtdePortas: "",
    renovacao: "",
    taxas: "",
    renavam: "",
    ipva: "",
    valorDiaria: "",
  });

  // mudança de input
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "categoria") {
      handleModelsCars();
    }
  };

  const handleSubmit = () => {
    let hasError = false;
    setErrors({
      categoria: "",
      modelo: "",
      placa: "",
      chassi: "",
      cor: "",
      direcao: "",
      portaMala: "",
      cilindradas: "",
      adaptado: "",
      transmissao: "",
      combustivel: "",
      ano: "",
      qtdePassageiros: "",
      qtdeAirbag: "",
      qtdePortas: "",
      renovacao: "",
      taxas: "",
      renavam: "",
      ipva: "",
      valorDiaria: "",
    });

    // Verifica se os campos obrigatórios estão preenchidos
    if (!formData.categoria) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        categoria: "Categoria é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.modelo) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        modelo: "Modelo é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.placa) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        placa: "Placa é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.chassi) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        chassi: "Chassi é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.cor) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cor: "Cor é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.direcao) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        direcao: "Direção é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.portaMala) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        portaMala: "Capacidade por mala é obrigatória!",
      }));
      hasError = true;
    }

    if (!formData.cilindradas) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cilindradas: "Cilindradas é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.adaptado) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        adaptado: "Marque se é adaptado.",
      }));
      hasError = true;
    }

    if (!formData.transmissao) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        transmissao: "Transmissão é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.combustivel) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        combustivel: "Combustível é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.ano) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ano: "Ano é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.qtdePassageiros) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        qtdePassageiros: "Qtd de passageiros é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.qtdeAirbag) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        qtdeAirbag: "Qtd de airbags é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.qtdePortas) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        qtdePortas: "Qtd de portas é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.renovacao) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        renovacao: "Renovação é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.taxas) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        taxas: "Taxa é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.renavam) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        renavam: "Renavam é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.ipva) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ipva: "IPVA é obrigatório!",
      }));
      hasError = true;
    }

    if (!formData.valorDiaria) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        valorDiaria: "Valor diária é obrigatório!",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    console.log("Dados do formulário:", formData);
  };

  const handleAddQuantityPassengers = (qtdePassageiros: string) => {
    setFormData({ ...formData, qtdePassageiros: qtdePassageiros });
  };

  const handleAddAirbags = (qtdeAirbag: string) => {
    setFormData({ ...formData, qtdeAirbag: qtdeAirbag });
  };

  const handleAddQuantityDoors = (qtdePortas: string) => {
    setFormData({ ...formData, qtdePortas: qtdePortas });
  };

  const handleModelsCars = () => {
    const selectedCategory = categoryCars().find(
      (c) => c.descricao === formData.categoria
    )?.valor;
    if (!selectedCategory) {
      setModels([]);
      return;
    }

    const modelsTotal = modelCars();
    const filteredModels = modelsTotal.filter(
      (m) => m.categoria === selectedCategory
    );
    const models = filteredModels.map((m) => m.modelo);
    setModels(models);
  };

  useEffect(() => {
    handleModelsCars();
  }, [formData.categoria]);

  return (
    <Container>
      <Section1>
        <ProfileImage />
        <CarData>
          <Line>
            <ErrorColumn>
              <Select
                title="Categoria:"
                options={categoryCars().map((c) => c.descricao)}
                name="categoria"
                value={formData.categoria}
                onChange={handleInputChange}
              />
              {errors.categoria && <ErrorTag>{errors.categoria}</ErrorTag>}
            </ErrorColumn>
            <ErrorColumn>
              <Select
                title="Modelo:"
                options={models}
                name="modelo"
                value={formData.modelo}
                onChange={handleInputChange}
                disabled={!formData.categoria}
              />
              {errors.modelo && <ErrorTag>{errors.modelo}</ErrorTag>}
            </ErrorColumn>
          </Line>
          <Line>
            <ErrorColumn>
              <Input
                title="Placa:"
                type="text"
                name="placa"
                value={formData.placa}
                onChange={handleInputChange}
              />
              {errors.placa && <ErrorTag>{errors.placa}</ErrorTag>}
            </ErrorColumn>
            <ErrorColumn>
              <Input
                title="Chassi:"
                type="text"
                name="chassi"
                value={formData.chassi}
                onChange={handleInputChange}
              />
              {errors.chassi && <ErrorTag>{errors.chassi}</ErrorTag>}
            </ErrorColumn>
          </Line>
          <Line>
            <ErrorColumn>
              <Select
                title="Cor:"
                options={colorCars()}
                name="cor"
                value={formData.cor}
                onChange={handleInputChange}
              />
              {errors.cor && <ErrorTag>{errors.cor}</ErrorTag>}
            </ErrorColumn>
            <ErrorColumn>
              <Select
                title="Direção:"
                options={direcCars()}
                name="direcao"
                value={formData.direcao}
                onChange={handleInputChange}
              />
              {errors.direcao && <ErrorTag>{errors.direcao}</ErrorTag>}
            </ErrorColumn>
          </Line>
        </CarData>
      </Section1>
      <Section2>
        <Line>
          <ErrorColumn>
            <Input
              title="Porta-mala:"
              type="number"
              name="portaMala"
              value={formData.portaMala}
              onChange={handleInputChange}
            />
            {errors.portaMala && <ErrorTag>{errors.portaMala}</ErrorTag>}
          </ErrorColumn>
          <ErrorColumn>
            <Input
              title="Cilindradas:"
              type="number"
              name="cilindradas"
              value={formData.cilindradas}
              onChange={handleInputChange}
            />
            {errors.cilindradas && <ErrorTag>{errors.cilindradas}</ErrorTag>}
          </ErrorColumn>
          <ErrorColumn>
            <Select
              title="Adaptado:"
              options={adaptationCars()}
              name="adaptado"
              value={formData.adaptado}
              onChange={handleInputChange}
            />
            {errors.adaptado && <ErrorTag>{errors.adaptado}</ErrorTag>}
          </ErrorColumn>
        </Line>
        <Line>
          <ErrorColumn>
            <Select
              title="Transmissão:"
              options={transmissionCars()}
              name="transmissao"
              value={formData.transmissao}
              onChange={handleInputChange}
            />
            {errors.transmissao && <ErrorTag>{errors.transmissao}</ErrorTag>}
          </ErrorColumn>
          <ErrorColumn>
            <Select
              title="Combustível:"
              options={combustCars()}
              name="combustivel"
              value={formData.combustivel}
              onChange={handleInputChange}
            />
            {errors.combustivel && <ErrorTag>{errors.combustivel}</ErrorTag>}
          </ErrorColumn>
          <ErrorColumn>
            <Input
              title="Ano:"
              type="number"
              name="ano"
              value={formData.ano}
              onChange={handleInputChange}
            />
            {errors.ano && <ErrorTag>{errors.ano}</ErrorTag>}
          </ErrorColumn>
        </Line>
      </Section2>
      <Section3>
        <ErrorColumn>
          <TextDoc>Passageiros:</TextDoc>
          <CheckBox
            options={quantityPassenger()}
            onChange={handleAddQuantityPassengers}
          />
          {errors.qtdePassageiros && (
            <ErrorTag style={{ marginTop: "85px" }}>
              {errors.qtdePassageiros}
            </ErrorTag>
          )}
        </ErrorColumn>
        <ErrorColumn>
          <TextDoc>Airbags:</TextDoc>
          <CheckBox options={quantityAirbags()} onChange={handleAddAirbags} />
          {errors.qtdeAirbag && (
            <ErrorTag style={{ marginTop: "140px" }}>
              {errors.qtdeAirbag}
            </ErrorTag>
          )}
        </ErrorColumn>
        <ErrorColumn>
          <TextDoc>Portas:</TextDoc>
          <CheckBox
            options={quantityPortas()}
            onChange={handleAddQuantityDoors}
          />
          {errors.qtdePortas && (
            <ErrorTag style={{ marginTop: "50px" }}>
              {errors.qtdePortas}
            </ErrorTag>
          )}
        </ErrorColumn>
      </Section3>
      <Section4>
        <ErrorColumn>
          <Input
            title="Renovação:"
            type="number"
            name="renovacao"
            value={formData.renovacao}
            onChange={handleInputChange}
          />
          {errors.renovacao && <ErrorTag>{errors.renovacao}</ErrorTag>}
        </ErrorColumn>
        <ErrorColumn>
          <Input
            title="Taxas:"
            type="number"
            name="taxas"
            value={formData.taxas}
            onChange={handleInputChange}
          />
          {errors.taxas && <ErrorTag>{errors.taxas}</ErrorTag>}
        </ErrorColumn>
        <ErrorColumn>
          <Input
            title="Renavam:"
            type="number"
            name="renavam"
            value={formData.renavam}
            onChange={handleInputChange}
          />
          {errors.renavam && <ErrorTag>{errors.renavam}</ErrorTag>}
        </ErrorColumn>
        <ErrorColumn>
          <Input
            title="IPVA:"
            type="number"
            name="ipva"
            value={formData.ipva}
            onChange={handleInputChange}
          />
          {errors.ipva && <ErrorTag>{errors.ipva}</ErrorTag>}
        </ErrorColumn>
      </Section4>
      <Section5>
        <ErrorColumn>
          <Input
            title="Valor diária:"
            type="number"
            name="valorDiaria"
            value={formData.valorDiaria}
            onChange={handleInputChange}
          />
          {errors.valorDiaria && <ErrorTag>{errors.valorDiaria}</ErrorTag>}
        </ErrorColumn>
      </Section5>
      <Section6>
        <Button
          title="Registrar carro"
          $minWidth="250px"
          type="button"
          onClick={handleSubmit}
        />
      </Section6>
    </Container>
  );
}
