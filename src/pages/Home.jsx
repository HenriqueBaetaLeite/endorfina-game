import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <main className="container">
    <h1>Este é o app Endorfina</h1>
    <p>Um aplicativo em forma de game para se divertir, praticar atividade física e cuidar da saúde.</p>
    <p>Nossa missão é fazer você se sentir bem!</p>

    <button type="button" onClick={() => history.push('/main')} className="btn btn-success">Entre</button>

    </main>
  );
};

export default Home;
