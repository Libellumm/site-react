import React from 'react';

function Menu() {
  return(
    <header id="menu">
      <a href="#" className="libellum h4"><img src="/img/icon/dragonfly.svg" alt="Libellum" />Libellum</a>

      <nav>
        <a href="/dashboard" id="login">Login</a>
      </nav>
    </header>
  );
}

export default Menu;