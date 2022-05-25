import {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
  passwordPaletaController,
  securityPaletaController,
} from '../controllers/paletas.controller.js';
import { Router } from 'express';
import { validId } from '../middlewares/validId.middleware.js';
import { validObjectBody } from '../middlewares/validObjectBody.middleware.js';
import { validExistence } from '../middlewares/validExistence.middleware.js';
import { validPasswordToken } from '../middlewares/validPasswordToken.middleware.js';

export const router = Router();

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
router.put(
  '/update/:id,:token',
  validPasswordToken,
  validId,
  validObjectBody,
  updatePaletaController,
);
router.delete(
  '/delete/:id,:token',
  validPasswordToken,
  validId,
  deletePaletaController,
);

