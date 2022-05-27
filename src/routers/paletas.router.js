import {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
} from '../controllers/paletas.controller.js';
import {
  findAllCarrinhoController,
  createManyItemsCarrinhoController,
  deleteAllItemsCarrinhoController,
} from '../controllers/carrinho.controller.js';
import {
  passwordPaletaController,
  securityPaletaController,
} from '../controllers/seguranca.controller.js';
import { validId } from '../middlewares/validId.middleware.js';
import { validObjectBody } from '../middlewares/validObjectBody.middleware.js';
import { validExistence } from '../middlewares/validExistence.middleware.js';
import { validPasswordToken } from '../middlewares/validPasswordToken.middleware.js';
import { validObjectBodyCarrinho } from '../middlewares/validObjectBodyCarrinho.middleware.js';
import { Router } from 'express';

export const router = Router();

router.get('/all-carrinho', findAllCarrinhoController);
router.get('/find-paletas', validExistence, findPaletasController);
router.get('/find-paleta/:id', validId, findPaletaByIdController);
router.get('/security/:senha,:token', passwordPaletaController);
router.get('/securitycheck/:token', securityPaletaController);
router.post(
  '/create/:token',
  validPasswordToken,
  validObjectBody,
  createPaletaController,
);
router.post(
  '/create-carrinho',
  validObjectBodyCarrinho,
  createManyItemsCarrinhoController,
);
router.put(
  '/update/:id,:token',
  validPasswordToken,
  validId,
  validObjectBody,
  updatePaletaController,
);
router.delete('/finish-carrinho', deleteAllItemsCarrinhoController);
router.delete(
  '/delete/:id,:token',
  validPasswordToken,
  validId,
  deletePaletaController,
);
