import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home/home-index';
import CadastroVideo from './pages/cadastro/Video/video-index';
import CadastroCategoria from './pages/cadastro/Categoria/categoria-index';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route component={Home} />
      {/* <Route component={() => (<div>Página 404</div>)} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);