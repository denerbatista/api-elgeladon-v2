import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import {env} from  'process';
import { routerCarrinho } from './src/routers/carrinho.router.js';
import { routerPaletas } from './src/routers/paletas.router.js';
import { routerPassword } from './src/routers/password.router.js';
import * as dataBase from './src/database/database.js';

config()
dataBase.connectToDatabase();

const port = env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/paletas', routerPaletas);
app.use('/paletas', routerPassword);
app.use('/paletas', routerCarrinho);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
