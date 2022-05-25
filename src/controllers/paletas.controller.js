import {
  findPaletasService,
  findPaletaByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
  passwordPaletaService,
  securityPaletaService,
} from '../services/paletas.service.js';

export let seguranca = [false, ''];

export const findPaletasController = async (req, res) => {
  const allPaletas = await findPaletasService();
  res.send(allPaletas);
};

export const findPaletaByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = await findPaletaByIdService(idParam);

  if (!chosenPaleta) {
    return res.status(404).send({ mensagem: 'Paleta não encontrada!' });
  }

  res.send(chosenPaleta);
};

export const createPaletaController = async (req, res) => {
  const {sabor,descricao,foto,preco} = req.body;
  const newPaleta = await createPaletaService(sabor,descricao,foto,preco);
  
  return res.send(newPaleta);
};

export const updatePaletaController = async (req, res) => {
  const {id} = req.params;
  const {sabor,descricao,foto,preco} = req.body;
  const updatedPaleta = await updatePaletaService({id,sabor,descricao,foto,preco});

  res.send(updatedPaleta);
};

export const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;

  await deletePaletaService(idParam);

  res.status(200).send({ mensagem: 'Paleta deletada com sucesso!' });
};

export const passwordPaletaController =  async (req, res) => {
  if (seguranca[0] == false) {
    const senhaParams = req.params;
    const senha = senhaParams.senha;
    const token = senhaParams.token;
    seguranca[0] = await passwordPaletaService(senha);
    if (seguranca[0] == true) {
      seguranca[1] = token;
      setTimeout(() => {
        seguranca[0] = false;
        console.log('senha expirada');
        seguranca[1] = '';
      }, 1800000);
      return res.send({
        mensagem: `Acesso Liberado`,
        token: `${Number(seguranca[1])}`,
      });
    } else {
      res.status(400).send({ mensagem: 'Senha inválida !' });
    }
  } else {
    const senhaParams = req.params;
    const token = senhaParams.token;
    if (seguranca[1] == token) {
      seguranca[0] = false;
      seguranca[1] = '';
      return res.send({
        mensagem: 'Acesso bloqueado com sucesso !',
        token: '',
      });
    } else if (seguranca[1] != token || !token) {
      res.send({ mensagem: 'Administrador já logado em outro local !' });
    }
  }
};

export const securityPaletaController = (req, res) => {
  const resposta = req.params.token;
  const statusSeguranca = securityPaletaService(
    seguranca[1],
    resposta,
    seguranca[0],
  );
  if (statusSeguranca == resposta) {
    return res.send({
      mensagem: 'Você já está logado digite a senha para sair.',
      token: `${Number(statusSeguranca)}`,
    });
  } else {
    if (statusSeguranca == 0) {
      return res.send({
        mensagem: 'Administrador já esta logado mas tenta a sorte ai ;)',
        token: `${Number(statusSeguranca)}`,
      });
    } else {
      return res.send({
        mensagem: 'Você ainda não esta logado digite a senha pra entrar.',
        token: `${Number(statusSeguranca)}`,
      });
    }
  }
};
