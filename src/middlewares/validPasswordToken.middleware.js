import { seguranca } from '../controllers/seguranca.controller.js';

export const validPasswordToken = async (req, res, next) => {
  const { token } = req.params;
  if (seguranca[0] == true && token == seguranca[1]) {
    next();
  } else {
    return res
      .status(404)
      .send({ mensagem: 'Acesso bloqueado, insira senha de administrador' });
  }
};
