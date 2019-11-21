import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
