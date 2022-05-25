import {Paleta} from "../models/Paleta.js";
import {Password} from "../models/Password.js";


export const findPaletasService = async () => {
  const paletas = await Paleta.find();
  return paletas;
};

export const findPaletaByIdService = async (id) => {
    const paleta = await Paleta.findById(id);
    return paleta;
  };

export const createPaletaService = async (sabor,descricao,foto,preco) => {
  const newPaleta = {
    sabor,
    descricao,
    foto,
    preco,
  };

  const paleta = await Paleta.create(newPaleta);

  return paleta;
  };

export const updatePaletaService = async ({id,sabor,descricao,foto,preco}) => {

  const paletaEdited = {
    sabor,
    descricao,
    foto,
    preco,
  };

  await Paleta.updateOne({ _id: id }, paletaEdited);

  const paleta = await Paleta.findById(id);

  return paleta;
  };

export const deletePaletaService = async (id) => {
    return await Paleta.findByIdAndDelete(id);
  };

export const passwordPaletaService = async (resposta) => {
  const password = await Password.findById("628e5a039ff17a0e3eeeb5bf");
  const verificador = resposta == password.token;
  
  return verificador;
};

export const securityPaletaService=(token,resposta,seguranca)=>{
  if(seguranca==true && token==resposta){
    return token
  }else if(seguranca==true && token!=resposta){
    return 0
    }else if(seguranca==false && token!=resposta){
    return Math.random()*1000+1;
  }else if(seguranca==false && token==resposta){
    return token
  }
} 
