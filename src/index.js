import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/home-index';
import CadastroConteudo from './pages/cadastro/Conteudo/conteudo-index';
import Pagina404 from './pages/pagina-404/pagina_404-index';
import Search from './components/Search/search-index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/conteudo" component={CadastroConteudo} />
      <Route path="/busca" component={Search} />
      <Route path="/not-found" component={Pagina404} status={404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
