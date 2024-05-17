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
  return ["Sedan de Luxo", "SUV de Luxo", "Esportivo de Luxo"];
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
