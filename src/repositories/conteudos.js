import config from '../config/config-index';

const URL_CONTENT = `${config.URL_BACKEND_TOP}/conteudos`;

function create(objetoDoVideo) {
  return fetch(`${URL_CONTENT}?_embed=conteudos`, {
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

function getAll() {
  return fetch(`${URL_CONTENT}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível retornar os dados.');
    });
}

function getAllWithSearch(search) {
  console.log(search);
  return fetch(`${URL_CONTENT}?_expand=tipo&q=${search}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        // console.log(resposta);
        return resposta;
      }

      throw new Error('Não foi possível retornar os dados.');
    });
}

export default {
  getAllWithSearch,
  getAll,
  create,
};
