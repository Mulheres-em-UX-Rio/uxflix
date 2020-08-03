import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home/home-index';
import CadastroVideo from './pages/cadastro/Video/video-index';
import CadastroCategoria from './pages/cadastro/Categoria/categoria-index';

const Pagina404 = () => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
  }}
  >
    <h1>Vish, que estranho!</h1>
    <p>Não achei a página que você tá procurando.</p>
    <p>
      Você pode
      {' '}
      <Link to="/">voltar pra home</Link>
      {' '}
      ou jogar esse joguinho aqui comigo.
    </p>
    {/*
      Pessoal, quem quiser fazer o desafio do Flappy Bird, da pra usar esse iframe aqui:
      - https://codepen.io/omariosouto/pen/pogmdGE

      E quem quiser programar o jogo:
      - https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
    */}
    <iframe
      title="Flappy Bird Game"
      src="https://mariosouto.com/flappy-bird-devsoutinho/"
      width="340"
      height="600"
    />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
