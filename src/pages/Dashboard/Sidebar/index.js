import React from 'react';
import './Sidebar.css';

function Sidebar(){
    return (

    <aside className="mdc-drawer">
      <div className="mdc-drawer__header">
        <img src="https://uinames.com/api/photos/female/7.jpg" alt="" width="50" />
        <div>
          <h3 className="mdc-drawer__title">Alice Bowman</h3>
          <h6 className="mdc-drawer__subtitle">alice@example.com</h6>
        </div>
      </div>
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
          <a className="mdc-list-item mdc-list-item--activated" href="/dashboard" aria-current="page">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">dashboard</i>
            <span className="mdc-list-item__text">Início</span>
          </a>
          <a className="mdc-list-item" href="/eventos">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">event</i>
            <span className="mdc-list-item__text">Eventos</span>
          </a>
          <a className="mdc-list-item" href="#">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">people</i>
            <span className="mdc-list-item__text">Participantes</span>
          </a>
          <a className="mdc-list-item" href="#">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">insert_drive_file</i>
            <span className="mdc-list-item__text">Certificados</span>
          </a>
          <hr className="mdc-list-divider" />
          <a className="mdc-list-item" href="#">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">settings_applications</i>
            <span className="mdc-list-item__text">Configurações</span>
          </a>
        </nav>
      </div>
    </aside>

    )
}

export default Sidebar;
