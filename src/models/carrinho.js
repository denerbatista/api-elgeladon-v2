import mongoose from "mongoose"
const { Schema, model } = mongoose;

const CarrinhoSchema = new Schema({
  paletaId: {
    type: String,
    require: true,
  },
  quantidade: {
    type: Number,
    require: true,
  },
});

export const Carrinho = model('carrinho', CarrinhoSchema);
