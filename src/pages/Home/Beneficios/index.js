import React from 'react';
import './beneficios.css';
import Computer from '../../../assets/icon/home/computer.svg';
import Clock from '../../../assets/icon/home/clock.svg';
import Customize from '../../../assets/icon/home/customize.svg';


function Beneficios() {
    return (
        <div>
             <section id="beneficios">
        <div className="content">
          <h2 className="section-title">Benefícios</h2>

          <div className="container">
            <div className="item">
              <div className="img">
                <img src={Computer} width="100" height="100" alt="Automatização" />
              </div>
              <h4>Automatização</h4>
              <p>Envie certificados de participação do seu evento automaticamente.</p>
            </div>

            <div className="item">
              <div className="img">
                <img src={Clock} width="100" height="100" alt="Agilidade" />
              </div>
              <h4>Agilidade</h4>
              <p>Gere listas de participantes que compareceram no seu evento de forma fácil e rápida.</p>
            </div>

            <div className="item">
              <div className="img">
                <img src={Customize} width="100" height="100" alt="Customização" />
              </div>
              <h4>Customização</h4>
              <p>Personalize o seu certificado de acordo com seu evento</p>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Beneficios;

