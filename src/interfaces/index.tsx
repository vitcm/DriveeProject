export interface Carro {
  categoria: string;
  modelo: string;
  placa: string;
  chassi: string;
  cor: string;
  direcao: string;
  portaMala: number;
  cilindradas: number;
  adaptado: string;
  transmissao: string;
  combustivel: string;
  ano: number;
  qtdePassageiros: number;
  qtdeAirbag: string;
  qtdePortas: number;
  renovacao: string;
  taxas: number;
  renavam: number;
  ipva: number;
  valorDiaria: number;
  status: string;
}

export interface Funcionario {
  nome: string;
  cpf: string;
  cnh: string;
  nacionalidade: string;
  celular: string;
  email: string;
  senha: string;
  dataNascimento: string;
  endereco: string;
  complemento: string;
  cep: string;
  uf: string;
  cidade: string;
  enderecoEmergencia: string;
  paisResidencia: string;
  telefoneEmergencia: string;
  localDeTrabalho: string;
  departamento: string;
  carteiraDeTrabalho: string;
  pis: string;
  tituloEleitor: string;
  situacao: string;
}

export interface Filial {
  nome: string;
  endereco: string;
  complemento: string;
  cep: string;
  uf: string;
  cidade: string;
  valorAluguel: number;
  inicioContrato: Date;
  fimContrato: Date;
  contrato: string;
}
