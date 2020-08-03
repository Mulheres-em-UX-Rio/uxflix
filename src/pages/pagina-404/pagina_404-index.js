import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DefaultParent from '../../components/DefaultParent/default_parent-index';
import SnakeGame from './snake/snake-index';

const Paragrafo = styled.p`
  font-size: 24px;
  width: 70%;
  line-height: 24px;
`;

function Pagina404() {
  return (
    <DefaultParent>
      <section style={{ float: 'left' }}>
        <h1>Vish, que estranho!</h1>
        <Paragrafo>Parece que assim como o Uníco, a página que você procura não existe.</Paragrafo>
        <Paragrafo>
          Você pode
          {' '}
          <Link to="/">voltar pra home</Link>
          {' '}
          ou jogar esse joguinho
          aqui comigo.
        </Paragrafo>
        <div className="pixelart-to-css" />
      </section>
      <section style={{ float: 'right' }}>
        {/* <SnakeGame /> */}
      </section>
    </DefaultParent>
  );
}

export default Pagina404;
