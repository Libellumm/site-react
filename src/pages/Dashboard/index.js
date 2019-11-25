import React from 'react';
import Sidebar from './Sidebar';
import Statistic from './Statistic';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Home(){
    return(
      <div>
        <Menu />
        <Sidebar />
        <Statistic />
        <Footer />
      </div>
    );
}

export default Home;