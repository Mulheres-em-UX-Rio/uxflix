import React, { useState, useEffect } from 'react';
import './menu-styles.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/imgs/uxflix-logo-pink.svg';
import useForm from '../../hooks/useForm';
import conteudosRepository from '../../repositories/conteudos';
import FormField from '../FormField/form_field-index';

function Menu() {
  const [search, setSearch] = useState([]);
  const searchWords = (search.map(({ tags }) => tags));
  const { handleChange, values } = useForm({
    search: '',
  }, onChange());
  const hasValue = values.search;

  function onChange(busca) {
    conteudosRepository
      .getAllWithSearch(busca)
      .then((returnSearchFromServer) => {
        console.log(returnSearchFromServer);
      });
  }

  useEffect(() => {
    conteudosRepository
      .getAll()
      .then((searchFromServer) => {
        setSearch(searchFromServer);
      });
  }, []);

  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} className="logo" alt="UXFlix logo" />
      </Link>

      <div className="search-input">

        <FormField
          label="Busca"
          type="search"
          name="search"
          value={hasValue}
          onChange={handleChange}
          suggestions={searchWords}
        />
        <div className={hasValue ? 'controls filled' : 'controls'} onClick={() => values.search = ''} />
      </div>
    </header>
  );
}

export default Menu;
