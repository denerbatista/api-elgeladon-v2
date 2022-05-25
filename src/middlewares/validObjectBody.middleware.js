export const validObjectBody = (req, res, next) => {
    const paleta = req.body;
    if (
      !paleta ||
      !paleta.sabor ||
      !paleta.descricao ||
      !paleta.foto ||
      !paleta.preco
    ) {
      return res
        .status(422)
        .send({ message: 'Envie o todos os campos da paleta!' });
    }
    next();
  };
