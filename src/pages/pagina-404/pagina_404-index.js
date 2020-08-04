import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DefaultParent from '../../components/DefaultParent/default_parent-index';
import SnakeGame from './snake/snake-index';



const Paragrafo = styled.p`
font-size: 24px;
/* width: 55%; */
line-height: 24px;
margin: 20px 0;
  b {
    color: #fff;
    font-weight: bold;
  }
`;

function Pagina404() {
  return (
    <DefaultParent>
      <section style={{ float: 'left', width: '45%' }}>
        <h1>Vish, que estranho!</h1>
        <Paragrafo>Parece que a página que você está procurando não existe. Que pena! Sinto muito mesmo. </Paragrafo>
        <Paragrafo>
          De qualquer forma, deixei esse joguinho aqui pra você se distrair enquanto decide o que fazer da vida.
        </Paragrafo>
        <div className="pixelart-to-css" />
      </section>
      <section style={{ float: 'right', width: '45%', textAlign: 'right' }}>
        <SnakeGame />
      </section>
    </DefaultParent>
  );
}

export default Pagina404;
