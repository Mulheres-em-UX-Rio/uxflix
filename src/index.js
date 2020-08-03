import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/home-index';
// import CadastroVideo from './pages/cadastro/Video/video-index';
// import CadastroCategoria from './pages/cadastro/Categoria/categoria-index';
import CadastroConteudo from './pages/cadastro/Conteudo/conteudo-index';
import Pagina404 from './pages/pagina-404/pagina_404-index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      {/* <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} /> */}
      <Route path="/cadastro/conteudo" component={CadastroConteudo} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
