export const validObjectBodyCarrinho = (req, res, next) => {
  const carrinho = req.body;
  if (carrinho == '') {
    return res
      .status(422)
      .send({ message: 'Envie todos os campos das paletas!' });
  }
  carrinho.forEach((element) => {
    if (!element || !element.paletaId || !element.quantidade) {
      return res
        .status(422)
        .send({ message: 'Envie todos os campos das paletas!' });
    }
  });
  return next();
};
