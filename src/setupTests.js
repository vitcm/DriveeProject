// setupTests.js

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');


const mock = new MockAdapter(axios);

mock.onGet('/api/filiais').reply(200, {
  id: 1,
  nome: 'Filial 1',
  endereco: 'Endereço 1',
  cep: '12345-678',
  uf: 'UF',
  cidade: 'Cidade',
  valorAluguel: 1000,
  inicioContrato: '2024-01-01',
  fimContrato: '2024-12-31',
  complemento: 'Complemento',
});
