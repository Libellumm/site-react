import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Calendario from './pages/Calendario';
import Formulário from './pages/Criar-Evento';
import Validarpresença from './pages/Validar-Presença';
import Login from './pages/Login'
import Singin from './pages/Singin'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/singin" component={Singin}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/eventos" component={Calendario} />
        <Route path="/criar-evento" component={Formulário} />
        <Route path="/validar-presenca" component={Validarpresença} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
