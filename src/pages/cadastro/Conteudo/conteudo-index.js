import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DefaultParent from '../../../components/DefaultParent/default_parent-index';
import FormField from '../../../components/FormField/form_field-index';
import Button from '../../../components/Button/button-index';
import useForm from '../../../hooks/useForm';
import tiposRepository from '../../../repositories/tipos';
import conteudosRepository from '../../../repositories/conteudos';
import 'moment-timezone';

function CadastroConteudo() {
  const history = useHistory();
  const [tipos, setTipos] = useState([]);
  // const typeTitles = tipos.map(({ titulo }) => titulo);

  const typeTitles = tipos.map(({ id, titulo }) => {
    if (id !== 0 && id !== 1) {
      return (titulo);
    }
  });

  const { handleChange, values } = useForm({
    title: '',
    type: '',
    url: '',
    desc: '',
    tags: '',
    date: '',
  });

  useEffect(() => {
    tiposRepository
      .getAll()
      .then((tiposFromServer) => {
        setTipos(tiposFromServer);
      });
  }, []);

  const createDate = new Date();
  // createDate = Moment().format("DD-MM-YYYY hh:mm:ss");

  return (
    <DefaultParent>

      <Link to="/" className="return-btn">
        Voltar
      </Link>

      <h1>Cadastrar conteúdo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const tipoEscolhido = tipos.find((tipo) => tipo.titulo === values.type);

        conteudosRepository.create({
          approved: false,
          views: 0,
          stars: 0,
          date: createDate,
          title: values.title,
          description: values.desc,
          url: values.url,
          tags: values.tags,
          type: tipoEscolhido.id,
        })
          .then(() => {
            console.log('Cadastrado com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Categoria"
          name="type"
          value={values.type}
          onChange={handleChange}
          suggestions={typeTitles}
        />

        <FormField
          label="Título"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="desc"
          value={values.desc}
          onChange={handleChange}
        />

        <FormField
          label="Tags"
          name="tags"
          value={values.tags}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>
    </DefaultParent>
  );
}

export default CadastroConteudo;
