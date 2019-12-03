import React from 'react';
import './calendario.css';
import Sidebar from '../Dashboard/Sidebar';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Calendario() {
    return (
        <div>
        <Menu/>
        <Sidebar/>

        <main>

        <div className="cabecalho">
          <h2>
            Eventos
          </h2>
          <div className="action">
              <input id="date" type="date" />
            <a href="/criar-evento" className="criar">
              Criar Evento
            </a>
          </div>
        </div>
    
        <div className="calendario">
    
          <div className="card">
            <div className="data">
              <span className="dia">01</span>
              <span className="mes">Nov</span>
    
            </div>
            <div className="conteudo">
              <h4>JavaScript</h4>
              <span>Tecnologia</span>
    
            </div>
          </div>
    
          <div className="card">
              <div className="data">
                <span className="dia">08</span>
                <span className="mes">Nov</span>
      
              </div>
              <div className="conteudo">
                <h4>JavaScript</h4>
                <span>Tecnologia</span>
      
              </div>
            </div>
    
            <div className="card">
              <div className="data">
                <span className="dia">15</span>
                <span className="mes">Nov</span>
      
              </div>
              <div className="conteudo">
                <h4>JavaScript</h4>
                <span>Tecnologia</span>
      
              </div>
            </div>
    
            <div className="card">
              <div className="data">
                <span className="dia">22</span>
                <span className="mes">Nov</span>
      
              </div>
              <div className="conteudo">
                <h4>JavaScript</h4>
                <span>Tecnologia</span>
      
              </div>
            </div>
    
            <div className="card">
              <div className="data">
                <span className="dia">29</span>
                <span className="mes">Nov</span>
      
              </div>
              <div className="conteudo">
                <h4>JavaScript</h4>
                <span>Tecnologia</span>
      
              </div>
            </div>
    
            <div className="card">
              <div className="data">
                <span className="dia">06</span>
                <span className="mes">Dez</span>
      
              </div>
              <div className="conteudo">
                <h4>JavaScript</h4>
                <span>Tecnologia</span>
      
              </div>
            </div>
    
            <div className="card">
              <div className="data">
                <span className="dia">13</span>
                <span className="mes">Dez</span>
      
              </div>
              <div className="conteudo">
                <h4>JavaScript</h4>
                <span>Tecnologia</span>
      
              </div>
            </div>
    
            <div className="card">
              <div className="data">
                <span className="dia">20</span>
                <span className="mes">Nov</span>
      
              </div>
              <div className="conteudo">
                <h4>JavaScript</h4>
                <span>Tecnologia</span>
      
              </div>
            </div>
    
            
        </div>
      </main>
      <Footer/>
      </div>
    )

}

        export default Calendario;