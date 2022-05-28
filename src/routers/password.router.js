import {
  passwordPaletaController,
  securityPaletaController,
} from "../controllers/seguranca.controller.js";
import { Router } from "express";

export const routerPassword = Router();

routerPassword.get("/security/:senha,:token", passwordPaletaController);
routerPassword.get("/securitycheck/:token", securityPaletaController);
