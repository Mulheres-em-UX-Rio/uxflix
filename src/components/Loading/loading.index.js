import React from 'react';

import './loading.styles.css';

const Loading = () => (
  <div className="loading">
    {' '}
    <div className="load-wrapp">
      <p>Carregando...</p>
      <div className="load-circles">
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
      </div>
    </div>
  </div>
);

export default Loading;
