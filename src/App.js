import React from 'react';
import './App.css';
import Intro from './pages/Intro';
import Welcome from './pages/Welcome';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <p>Ola</p>
      <Switch>
        <Route component={Intro}></Route>
      </Switch>
    </div>
  );
}

export default App;
