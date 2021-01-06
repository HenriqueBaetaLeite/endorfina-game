import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Main from './pages/Main';
import Warmup from './pages/Warmup';
import Game from './pages/Game';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/intro" component={Intro} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/warmup" component={Warmup} />
      <Route exact path="/game" component={Game} />
    </Switch>
  );
}

export default App;
