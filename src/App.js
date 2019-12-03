import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Calendario from './pages/Calendario';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/eventos" component={Calendario} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
