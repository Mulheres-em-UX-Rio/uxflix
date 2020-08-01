import React from 'react';
import DefaultParent from '../../../components/DefaultParent/default_parent-index';
import { Link } from 'react-router-dom';

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