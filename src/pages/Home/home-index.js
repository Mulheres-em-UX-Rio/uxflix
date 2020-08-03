import React, { useState } from 'react';
import Carousel from '../../components/Carousel/carousel-index';
import DefaultParent from '../../components/DefaultParent/default_parent-index';
import categoriasRepository from '../../repositories/categorias';
import './home-styles.css';

import imgBanner from '../../assets/imgs/logo+mulheres-white.png';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/button-index';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useState(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        // console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
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

      {dadosIniciais.map((categoria, indice) => {
        // if (indice === 0) {
        //   return (
        //     <div key={categoria.id}>
        //       <BannerMain
        //         videoTitle={dadosIniciais[0].videos[0].titulo}
        //         url={dadosIniciais[0].videos[0].url}
        //         videoDescription={dadosIniciais[0].videos[0].description}
        //       />
        //       <Carousel
        //         ignoreFirstVideo
        //         category={dadosIniciais[0]}
        //       />
        //     </div>
        //   );
        // }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </DefaultParent>
  );
}

export default Home;
