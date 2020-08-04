import React, { useState, useEffect } from 'react';
import './menu-styles.css';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../assets/imgs/uxflix-logo-pink.svg';
import useForm from '../../hooks/useForm';
import conteudosRepository from '../../repositories/conteudos';
import FormField from '../FormField/form_field-index';

function Menu() {
  const [search, setSearch] = useState([]);
  const searchWords = (search.map(({ tags }) => tags));
  const { handleChange, values, clearForm } = useForm({
    search: '',
  });
  const hasValue = values.search;
  onChange(hasValue);

  function onChange(word) {
    conteudosRepository
      .getAllWithSearch(word)
      .then((returnSearchFromServer) => {
        console.log((returnSearchFromServer));
      });
  }

  useEffect(() => {
    conteudosRepository
      .getAll(values.search)
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
        <div
          className={hasValue ? 'controls filled' : 'controls'}
          onClick={function handleClick(infosDoEvento) {
            infosDoEvento.preventDefault();
            clearForm();
          }}
        />
      </div>
    </header>
  );
}

export default Menu;
