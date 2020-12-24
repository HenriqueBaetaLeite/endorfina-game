import React from 'react';
import './App.css';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Game from './pages/Game';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main className="container">
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/intro" component={Intro} />
        <Route path="/game" component={Game} />
      </Switch>
    </main>
  );
}

export default App;
