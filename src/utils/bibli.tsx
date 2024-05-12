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
