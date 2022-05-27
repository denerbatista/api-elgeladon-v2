import { Carrinho } from '../models/carrinho.js';

export const findAllCarrinhoService = async () => {
  const allCarrinho = await Carrinho.find();
  return allCarrinho;
};

export const createManyItemsCarrinhoService = async (newCarrinho) => {
  const createdCarrinho = await Carrinho.insertMany(newCarrinho);
  return createdCarrinho;
};

export const deleteAllItemsCarrinhoService = async () => {
  return await Carrinho.deleteMany();
};
