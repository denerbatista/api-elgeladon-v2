import {passwordPaletaService,
securityPaletaService,
} from '../services/seguranca.service.js';

export let seguranca = [false, ''];

export const passwordPaletaController = async (req, res) => {
  if (seguranca[0] == false) {
    const { senha, token } = req.params;
    seguranca[0] = await passwordPaletaService(senha);
    if (seguranca[0] == true) {
      seguranca[1] = token;
      setTimeout(() => {
        seguranca[0] = false;
        console.log('Senha expirada');
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
    const { token } = req.params;
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
