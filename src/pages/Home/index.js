import React from 'react';
import Menu from '../../components/Menu'
import Banner from './Banner'
import Beneficios from './Beneficios'
import Funcionalidades from './Funcionalidades'
import Contato from './Contato'
import Footer from '../../components/Footer'


function Home(){
    return(
      <div>
        <Menu />
        <Banner />
        <Beneficios />
        <Funcionalidades />
        <Contato />
        <Footer />
      </div>
    );
}

export default Home;