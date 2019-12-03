import React from 'react';
import Menu from '../../components/Menu';
import Sidebar from '../Dashboard/Sidebar';
import Formulário from './Formulário/formulário';
import Footer from '../../components/Footer';

function Criarevento() {
    return(
      <div>
        <Menu />
        <Sidebar />
        <Formulário />
        <Footer />
      </div>
    );
}

export default Criarevento;