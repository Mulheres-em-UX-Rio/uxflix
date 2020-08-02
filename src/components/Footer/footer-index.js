import React from 'react';
import { FooterBase } from './footer-styles';

function Footer() {
  return (
    <FooterBase>
      <div>
        <p>
          Feito com
          {' '}
          <i>♥</i>
          {' '}
          por
          {' '}
          <a href="http://www.maismulheresux.com/" target="_blank">
            +Mulheres em UX
          </a>
        </p>
        <p className="alura">
          Durante a Imersão React da
          {' '}
          <a href="https://www.alura.com.br/" target="_blank">
            Alura
          </a>
        </p>
      </div>
      <span>
        contato@maismulheresux.com
      </span>
    </FooterBase>
  );
}

export default Footer;
