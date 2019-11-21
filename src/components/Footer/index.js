import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <h1 className="libellum"><img src="/img/icon/dragonfly.svg" alt="Libellum" /> Libellum</h1>
        </div>
        
        <div className="contato">
          <h6>Telefone: (45)99903 ** **</h6>
          <h6>E-mail: contato@libellum.com.br</h6>
          <h6>Endereço: Avenida das Cataratas, 00</h6>
        </div>

        <div className="redes-sociais">
          <a href=""><img src="/img/icon/social/facebook-f-brands.svg" alt="" width="30" height="30" /></a>
          <a href=""><img src="/img/icon/social/linkedin-in-brands.svg" alt="" width="30" height="30" /></a>
          <a href=""><img src="/img/icon/social/twitter-brands.svg" alt="" width="30" height="30" /></a>
          <a href=""><img src="/img/icon/social/whatsapp-brands.svg" alt="" width="30" height="30" /></a>
        </div>
      </div>
      
      <div className="copyright">
        <p>Todos os direitos reservados © 2019 Libellum</p>
      </div>
    </footer>
  );
}

export default Footer;