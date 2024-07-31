import axios from "axios";

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://frontend-api.pump.fun',
  headers: { 'Content-Type': 'application/json' }
});


export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url)
  setDados(resposta.data)
}

