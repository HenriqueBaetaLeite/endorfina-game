import React, { useEffect, useContext, useState } from 'react';
import EndorfinaContext from '../context';
import {useHistory} from 'react-router-dom';

const Game = () => {
  const history = useHistory();
  const [mood, setMood] = useState(null);
  const { userData, setUserData } = useContext(EndorfinaContext);

  useEffect(() => {
    localStorage.getItem('userData') ? 
    setUserData(JSON.parse(localStorage.getItem('userData')))
    : history.push('/intro');
  }, []);

  useEffect(() => {
    setMood(userData.mood)
  }, [userData])

  const frase = {
    bom: 'Ótimo saber que está se sentindo bem hoje, assim podemos caprichar no treino!',
    regular: 'Relax, antes mesmo do aquecimento sua energia estará lá no alto!',
    mal: 'Não se desanime, apesar do cansaço, o treino poderá elevar sua energia!',
  };

console.log('Estamos no GAME!!!', userData);
console.log('minha dispo hj:', mood);
  return (
    <main className="container">
      <h1>Welcome to the Jungle {userData.level} {userData.name}!</h1>
      <p>{mood === 'bom' ? frase.bom : mood === 'regular' ? frase.regular : frase.mal }</p>
    </main>
  );
};

export default Game;
