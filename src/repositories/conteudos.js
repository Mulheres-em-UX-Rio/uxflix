import config from '../config/config-index';

const URL_CONTENT = `${config.URL_BACKEND_TOP}/conteudos`;

function create(objetoDoVideo) {
  return fetch(`${URL_CONTENT}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados.');
    });
}

export default {
  create,
};
