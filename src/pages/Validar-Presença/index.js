import React from 'react';
import Menu from '../../components/Menu';
import Sidebar from '../Dashboard/Sidebar';
import Descrição from './Descrição';
import Participantes from './Participantes';
import Footer from '../../components/Footer';

function Validarpresença() {
    return(
      <div>
        <Menu />
        <Sidebar />
        <main>
            <Descrição />
            <Participantes />
        </main>
        <Footer />
      </div>
    );
}

export default Validarpresença;