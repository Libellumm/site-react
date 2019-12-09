import React from 'react';
import './menu.css';

import IconLogo from '../../assets/icon/dragonfly.svg';

function Menu({ home }) {
  return(
    <header id="menu" className={ home ? '' : 'dashboard' }>
      <a href="#" className="libellum h4"><img src={IconLogo} alt="Libellum" />Libellum</a>

      { 
          home 
        ?
        <nav>
          <a href="/login" id="login">Login</a>
        </nav>
        :
          <a href="/" id="logout">Sair</a>
      }
    </header>
  );
}

export default Menu;