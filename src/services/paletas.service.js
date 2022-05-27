import { Paleta } from '../models/Paleta.js';

export const findPaletasService = async () => {
  const paletas = await Paleta.find();
  return paletas;
};

export const findPaletaByIdService = async (id) => {
  const paleta = await Paleta.findById(id);
  return paleta;
};

export const createPaletaService = async (sabor, descricao, foto, preco) => {
  const newPaleta = {
    sabor,
    descricao,
    foto,
    preco,
  };
  const paleta = await Paleta.create(newPaleta);
  return paleta;
};

export const updatePaletaService = async ({
  id,
  sabor,
  descricao,
  foto,
  preco,
}) => {
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
