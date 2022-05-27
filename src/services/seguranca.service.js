import {Password} from "../models/Password.js";

export const passwordPaletaService = async (resposta) => {
  const password = await Password.findById('628e5a039ff17a0e3eeeb5bf');
  const verificador = resposta == password.token;
  return verificador;
};

export const securityPaletaService = (token, resposta, seguranca) => {
  if (seguranca == true && token == resposta) {
    return token;
  } else if (seguranca == true && token != resposta) {
    return 0;
  } else if (seguranca == false && token != resposta) {
    return Math.random() * 1000 + 1;
  } else if (seguranca == false && token == resposta) {
    return token;
  }
};
