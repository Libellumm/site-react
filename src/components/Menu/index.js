import React from 'react';
import './menu.css';

import IconLogo from '../../assets/icon/dragonfly.svg';

function Menu() {
  return(
    <header id="menu">
      <a href="#" className="libellum h4"><img src={IconLogo} alt="Libellum" />Libellum</a>

      <nav>
        <a href="/dashboard" id="login">Login</a>
      </nav>
    </header>
  );
}

export default Menu;