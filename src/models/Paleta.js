import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PaletaSchema = new Schema(
  {
    sabor: { type: String, required: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
    preco: { type: Number, required: true },
  },
  { versionKey: false },
);

export const Paleta = model('paletas', PaletaSchema);
