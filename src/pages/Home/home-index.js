import React from 'react';
import Menu from '../../components/Menu/menu-index';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain/banner_main-index';
import Carousel from '../../components/Carousel/carousel-index';
import Footer from '../../components/Footer/footer-index';
import './home-styles.css';

import imgBanner from '../../assets/imgs/uxflix-logo-purple.svg';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/button-index';

function Home() {
  return (
    <div>
      <Menu />

      {/* <BannerMain
        // url={dadosIniciais.categorias[0].videos[0].url}
        bannerTitle="Repositório colaborativo de conteúdos relacionados à disciplina de Experiência do Usuário."
        bannerImg={imgBanner}
      /> */}

      <div className="banner-main">
        <section>
          <h2>
            Repositório colaborativo de conteúdos relacionados à disciplina de
            {' '}
            <i>Experiência do Usuário</i>
          </h2>
          <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Enviar vídeo
          </Button>
        </section>
        <section>
          <img src={imgBanner} />
        </section>
      </div>

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default Home;
