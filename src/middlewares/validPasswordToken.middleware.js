import {seguranca} from '../controllers/paletas.controller.js'

export const validPasswordToken = async (req, res, next) => {
    const params = req.params
    const token = params.token
    if (seguranca[0] == true && token == seguranca[1]){
      next()
    } else {
      return res
        .status(404)
        .send({ mensagem: 'Acesso bloqueado, insira senha de administrador' });
    }
  };
