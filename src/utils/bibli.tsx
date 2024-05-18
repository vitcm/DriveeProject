// APIs externas ao projeto
export const fetchStates = async () => {
  try {
    const response = await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar estados:", error);
    return [];
  }
};

export const fetchCities = async (uf: string) => {
  try {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar cidades:", error);
    return [];
  }
};

export const fetchCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar países:", error);
    return [];
  }
};

export const numberToCurrency = (value?: number) => {
  const numberFormat = (value || 0.0).toFixed(2).replace(".", ",");

  if (numberFormat) {
    const [valuePart, decimalPart] = numberFormat.split(",");

    const stringFormated = `R$ ${parseFloat(valuePart || "0").toLocaleString(
      "pt-BR"
    )},${decimalPart || "00"}`;

    return stringFormated;
  }
  return "R$ 0,00";
};

// Dados fixos
export const weekDays = () => {
  return [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
};

export const timeOfDay = () => {
  const times = [];
  for (let hour = 6; hour <= 20; hour++) {
    times.push(`${hour}:00`);
  }
  return times;
};

export const departaments = () => {
  return [
    "Recursos humanos",
    "Financeiro",
    "Manutenção carros",
    "Atendimento online",
    "Atendimento presencial",
    "Desenvolvimento",
    "Marketing",
    "Limpeza",
    "T.I.",
    "Compras",
    "Gerência",
  ];
};

export const jobSpot = () => {
  return [
    "Estagiário",
    "Assistente",
    "Trainee",
    "Júnior",
    "Pleno",
    "Senior",
    "Especialista",
    "Diretor",
    "Gerente",
    "Analista",
    "Consultor",
    "Supervisor",
    "Técnico",
  ];
};

export const statusEmployer = () => {
  return [
    "Em atuação",
    "Férias",
    "Licença maternidade/paternidade",
    "Afastamento",
    "Inativo",
  ];
};

export const documentsPerson = () => {
  return ["Documento de identidade", "Cadastro de pessoa física", "Passaporte"];
};

export const jobBenefits = () => {
  return [
    "VR+VT",
    "Planos de saúde",
    "GymPass",
    "Aniversário DayOff",
    "Auxílio home office",
  ];
};

export const categoryCars = () => {
  return [
    { descricao: "Sedan de Luxo", valor: "sedan" },
    { descricao: "SUV de Luxo", valor: "suv" },
    { descricao: "Esportivo de Luxo", valor: "esport" },
  ];
};

export const modelCars = () => {
  return [
    { categoria: "sedan", modelo: "Mercedes-Benz Classe S" },
    { categoria: "sedan", modelo: "BMW Série 7" },
    { categoria: "sedan", modelo: "Audi A8" },
    { categoria: "sedan", modelo: "Lexus LS" },
    { categoria: "sedan", modelo: "Jaguar XJ" },
    { categoria: "suv", modelo: "Range Rover Vogue" },
    { categoria: "suv", modelo: "Porsche Cayenne" },
    { categoria: "suv", modelo: "Mercedes-Benz GLE" },
    { categoria: "suv", modelo: "BMW X5" },
    { categoria: "suv", modelo: "Audi Q7" },
    { categoria: "esport", modelo: "Lamborghini Huracán" },
    { categoria: "esport", modelo: "Ferrari 488 GTB" },
    { categoria: "esport", modelo: "Porsche 911 Turbo S" },
    { categoria: "esport", modelo: "McLaren 720S" },
    { categoria: "esport", modelo: "Aston Martin DB11" },
  ];
};

export const colorCars = () => {
  return ["Preto", "Branco", "Prata", "Cinza", "Azul escuro", "Vermelho"];
};

export const direcCars = () => {
  return ["Hidráulica", "Elétrica EPS", "Adaptativa", "Integral Ativa"];
};

export const adaptationCars = () => {
  return [
    "Sem adaptação",
    "Controles manuais",
    "Acesso cadeira de rodas",
    "Assentos giratórios",
    "Sistemas de Travamento e Desbloqueio Automático",
    "Adaptações de Portas",
    "Comandos por Voz ou por Controle Remoto",
  ];
};

export const transmissionCars = () => {
  return [
    "Convencional",
    "Dupla Embreagem (DCT)",
    "Continuamente Variável (CVT)",
    "Manual",
    "Automática de Conversor de Torque",
    "Automática de Variável Linear (LVT)",
  ];
};

export const combustCars = () => {
  return [
    "Gasolina",
    "Diesel",
    "Híbrido",
    "Híbrido plug-in",
    "Elétrico",
    "Hidrogênio",
  ];
};

export const quantityPassenger = () => {
  return [2, 5, 6, 7];
};

export const quantityAirbags = () => {
  return [
    "Sem Airbags",
    "Airbags Frontais",
    "Airbags Laterais",
    "Airbags de Cortina",
    "Airbags de Joelho",
    "Airbags traseiros",
    "Airbags de Cinto de Segurança",
  ];
};

export const quantityPortas = () => {
  return [2, 4];
};

export const occupationArea = () => {
  return [
    "Manutenção",
    "Limpeza",
    "Seguro de veículos",
    "Atendimento ao cliente",
    "Marketing e publicidade",
  ];
};

export const savedCars = () => {
  return [
    {
      nome: "A8",
      placa: "AAA1A11",
      ano: "2024",
      valorDiaria: numberToCurrency(1250),
    },
    {
      nome: "Mustang",
      placa: "BBB2BB2",
      ano: "1969",
      valorDiaria: numberToCurrency(3148),
    },
    {
      nome: "Flying Spur",
      placa: "CCC3CC3",
      ano: "2023",
      valorDiaria: numberToCurrency(1539),
    },
  ];
};

export const extrasCars = () => {
  return [
    { servico: "Bebê conforto", valorDiaria: numberToCurrency(78) },
    {
      servico: "Caixa de transporte cachorro P",
      valorDiaria: numberToCurrency(78),
    },
    {
      servico: "Caixa de transporte cachorro M",
      valorDiaria: numberToCurrency(100),
    },
    {
      servico: "Caixa de transporte cachorro G",
      valorDiaria: numberToCurrency(120),
    },
    {
      servico: "Caixa de transporte cachorro GG",
      valorDiaria: numberToCurrency(150),
    },
    { servico: "GPS TouchScreen", valorDiaria: numberToCurrency(125) },
    { servico: "Seguro furto", valorDiaria: numberToCurrency(295) },
    { servico: "Seguro batida", valorDiaria: numberToCurrency(380) },
    { servico: "Seguro danos naturais", valorDiaria: numberToCurrency(187) },
  ];
};

export const reservationData = () => {
  return [
    {
      codigoReserva: "00001569",
      CPF: "11122233322",
      carro: "A8",
      dataReserva: "23/03/2024",
    },
    {
      codigoReserva: "00000124",
      CPF: "22233311122",
      carro: "Mustang",
      dataReserva: "05/02/2024",
    },
    {
      codigoReserva: "00062584",
      CPF: "7778889977",
      carro: "Flying Spur",
      dataReserva: "15/01/2024",
    },
  ];
};

export const dataReservationDetails = () => {
  return [
    {
      nomeCarro: "A8",
      placa: "aaa1a11",
      cpfCliente: "22233311122",
      dataRetirada: "25/03/2024",
      filial: "5 - Oeste",
    },
    {
      nomeCarro: "Mustang",
      placa: "bbb2b22",
      cpfCliente: "44455566655",
      dataRetirada: "18/05/2024",
      filial: "1 - Guanabara",
    },
    {
      nomeCarro: "Flying Spur",
      placa: "ccc3c33",
      cpfCliente: "77788899988",
      dataRetirada: "03/09/2024",
      filial: "3 - Marista",
    },
  ];
};
