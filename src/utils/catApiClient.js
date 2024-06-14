import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_AtAH7X2hW8VPuZHZXpl1WhebEgJPMlceTKd1j0wRRyalfZm4KkoyQ7sixvsdDR28'; // Chave da API

const catApiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'x-api-key': API_KEY,
  },
});

export default catApiClient;
