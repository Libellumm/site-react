import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Calendario from './pages/Calendario';
import Formulário from './pages/Criar-Evento';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/eventos" component={Calendario} />
        <Route path="/criar-evento" component={Formulário} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
