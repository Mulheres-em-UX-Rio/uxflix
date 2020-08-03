import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DefaultParent from '../../../components/DefaultParent/default_parent-index';
import FormField from '../../../components/FormField/form_field-index';
import Button from '../../../components/Button/button-index';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import conteudoRepository from '../../../repositories/tipos_conteudo';

interface Conteudo {
    id: Number;
    approved: Boolean;
    views: Number;
    stars: Number;
    date: Date;
    title: String;
    type: String;
    url: String;
    // foto: String;
    tags: String;
}

function CadastroConteudo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    id: '',
    approved: false,
    views: 0,
    stars: 0,
    date: '',
    title: '',
    type: '',
    url: '',
    // foto: '',
    tags: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <DefaultParent>

      <Link to="/" className="return-btn">
        Voltar
      </Link>

      <h1>Cadastrar conteúdo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          title: values.title,
          type: values.type,
          url: values.url,
          tags: values.tags,
          // type: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrado com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Tipo"
          name="type"
          value={values.type}
          onChange={handleChange}
          suggestions={categoryTitles}
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
          label="Tags"
          name="tags"
          value={values.tags}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {/* <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link> */}
    </DefaultParent>
  );
}

export default CadastroConteudo;
