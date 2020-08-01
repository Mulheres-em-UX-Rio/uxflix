import React from 'react';
import './menu-styles.css';
import { Link } from 'react-router-dom';

import ButtonLink from './ButtonLink/button_link-index';
import Button from '../Button/button-index';

import Logo from '../../assets/imgs/uxflix-logo-pink.svg'

function Menu() {
    return(
        <header className="menu">
            <Link to="/">
                <img src={Logo} className="logo" alt="UXFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </header>
    );
}

export default Menu;