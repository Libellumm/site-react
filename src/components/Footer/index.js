import React from 'react';
import './footer.css';

import IconLogo from '../../assets/icon/dragonfly.svg';

import Facebook from '../../assets/icon/social/facebook-f-brands.svg';
import LinkedIn from '../../assets/icon/social/linkedin-in-brands.svg';
import Twitter from '../../assets/icon/social/twitter-brands.svg';
import Whatsapp from '../../assets/icon/social/whatsapp-brands.svg';


function Footer({ home }) {

  return (
    <footer className={home ? '' : 'dashboard'}>

      { 
          home 
        ?
          <div className="container">
            <div>
              <h1 className="libellum"><img src={IconLogo} alt="Libellum" /> Libellum</h1>
            </div>
            
            <div className="contato">
              <h6>Telefone: (45)99903 ** **</h6>
              <h6>E-mail: contato@libellum.com.br</h6>
              <h6>Endereço: Avenida das Cataratas, 00</h6>
            </div>

            <div className="redes-sociais">
              <a href=""><img src={Facebook} alt="" width="30" height="30" /></a>
              <a href=""><img src={LinkedIn} alt="" width="30" height="30" /></a>
              <a href=""><img src={Twitter} alt="" width="30" height="30" /></a>
              <a href=""><img src={Whatsapp} alt="" width="30" height="30" /></a>
            </div>
          </div>
        :
          ""
      }
      
      <div className="copyright">
        <p>Todos os direitos reservados © 2019 Libellum</p>
      </div>
    </footer>
  );
}

export default Footer;