import {
  findAllCarrinhoController,
  createManyItemsCarrinhoController,
  deleteAllItemsCarrinhoController,
} from "../controllers/carrinho.controller.js";
import { validObjectBodyCarrinho } from "../middlewares/validObjectBodyCarrinho.middleware.js";
import { Router } from "express";

export const routerCarrinho = Router();

routerCarrinho.get("/all-carrinho", findAllCarrinhoController);
routerCarrinho.delete("/finish-carrinho", deleteAllItemsCarrinhoController);
routerCarrinho.post(
  "/create-carrinho",
  validObjectBodyCarrinho,
  createManyItemsCarrinhoController
);
