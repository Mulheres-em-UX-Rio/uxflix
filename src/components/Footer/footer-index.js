import React from 'react';
import { FooterBase } from './footer-styles';

function Footer() {
  return (
    <FooterBase>
      <div>
        <p>
          Feito com <i>♥</i> por
          {' '}
          <a href="https://www.maismulheresux.com/">
            +Mulheres em UX
          </a>
        </p>
        <p className="alura">
          Durante a Imersão React da
          {' '}
          <a href="https://www.alura.com.br/">
            Alura
          </a>
        </p>
      </div>
      <a href="https://www.maismulheresux.com/">
        contato@maismulheresux.com
      </a>
    </FooterBase>
  );
}

export default Footer;
