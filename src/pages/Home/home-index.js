import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/carousel-index';
import DefaultParent from '../../components/DefaultParent/default_parent-index';
import tiposRepository from '../../repositories/tipos';
import './home-styles.css';

import imgBanner from '../../assets/imgs/logo+mulheres-white.png';
import Button from '../../components/Button/button-index';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useState(() => {
    // http://localhost:8080/categorias?_embed=videos
    tiposRepository.getAllWithContent()
      .then((tiposComConteudo) => {
        setDadosIniciais(tiposComConteudo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <DefaultParent paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      <div className="banner-main">
        <section>
          <h2>
            Repositório colaborativo de conteúdos relacionados à disciplina de
            {' '}
            <i>Experiência do Usuário</i>
          </h2>
          <Button as={Link} className="ButtonLink" to="/cadastro/conteudo">
            Enviar conteúdo
          </Button>
        </section>
        <section>
          <img src={imgBanner} alt="Logo +Mulheres em UX" />
        </section>
      </div>

      {dadosIniciais.map((tipo, indice) => {
        if (indice === 0 || indice === 1) {
          return (
            <div key={tipo.id}>
              {/* <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              /> */}
            </div>
          );
        }

        return (
          <Carousel
            key={tipo.id}
            type={tipo}
          />
        );
      })}
    </DefaultParent>
  );
}

export default Home;
