import React from 'react';
import { Link } from 'react-router-dom';
import DefaultParent from '../../../components/DefaultParent/default_parent-index';

function CadastroVideo() {
  return (
    <DefaultParent>
      <h1>Cadastro de vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </DefaultParent>
  );
}

export default CadastroVideo;
