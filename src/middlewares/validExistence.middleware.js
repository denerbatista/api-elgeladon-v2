import {findPaletasService} from '../services/paletas.service.js'

export const validExistence = async (req, res, next)=>{
    const allPaletas = await findPaletasService();
    if (allPaletas.length == 0) {
      console.log('teste')
      return res
        .status(404)
        .send({ mensagem: 'Não existe nenhuma paleta cadastrada!' });
    }
    next()
}

