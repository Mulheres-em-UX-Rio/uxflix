import config from '../config/config-index';

const URL_TYPES = `${config.URL_BACKEND_TOP}/tipos`;

function getAll() {
  return fetch(`${URL_TYPES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível retornar os dados.');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_TYPES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível retornar os dados.');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
