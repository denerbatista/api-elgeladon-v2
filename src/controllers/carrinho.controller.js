import {
  findAllCarrinhoService,
  createManyItemsCarrinhoService,
  deleteAllItemsCarrinhoService,
} from '../services/carrinho.service.js';

export const findAllCarrinhoController = async (req, res) => {
  const allCarrinho = await findAllCarrinhoService();
  if (allCarrinho == '') {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum item no carrinho!' });
  }
  res.send(allCarrinho);
};

export const createManyItemsCarrinhoController = async (req, res) => {
  try {
    const carrinho = req.body;
    const newCarrinho = await createManyItemsCarrinhoService(carrinho);
    return res.status(201).send(newCarrinho);
  } catch (error) {
    return res.status(error.status).send(error.message);
  }
};

export const deleteAllItemsCarrinhoController = async (req, res) => {
  await deleteAllItemsCarrinhoService();
  res.send({ message: 'Carrinho finalizado com sucesso!' });
};
