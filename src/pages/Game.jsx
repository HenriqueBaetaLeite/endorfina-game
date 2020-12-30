import React, { useEffect, useContext, useState } from 'react';
import EndorfinaContext from '../context';
import { useHistory } from 'react-router-dom';

import { Card, Modal } from 'antd';

import { Chance } from 'chance';

import Menu from '../components/Menu';

import exercisesTypes from '../data/exercisesTypes';
import homeWodsEasy from '../data/wods';

//const chance = require('chance').Chance();

const Game = () => {
  console.log(exercisesTypes);

  const history = useHistory();
  const [mood, setMood] = useState(null);
  const { userData, setUserData } = useContext(EndorfinaContext);
  const [wod, setWod] = useState(null);

  useEffect(() => {
    localStorage.getItem('userData')
      ? setUserData(JSON.parse(localStorage.getItem('userData')))
      : history.push('/intro');
    const newWod = Chance().pickone(exercisesTypes);
    setWod(newWod);
  }, []);

  useEffect(() => {
    setMood(userData.mood);
  }, [userData]);

  const frase = {
    bom: 'Ótimo saber que está se sentindo bem hoje, assim podemos caprichar no treino!',
    regular: 'Relax, antes mesmo do aquecimento sua energia estará lá no alto!',
    mal: 'Não se desanime, apesar do cansaço, o treino poderá elevar sua energia!',
  };

  const handleLogout = () => {
    localStorage.clear('userData');
    history.push('/intro');
  };

  console.log('Estamos no GAME!!!', userData);
  console.log('minha dispo hj:', mood);
  console.log('Esse foi o wod sorteado:', wod);
  return (
    <main className="container">
      <Menu />
      <h1>
        Welcome to the Jungle {userData.level} {userData.name}!
      </h1>
      <p>{mood === 'bom' ? frase.bom : mood === 'regular' ? frase.regular : frase.mal}</p>
      <article className="card p-2">
        <p>
          Esse treinamento é um mix de diversos métodos de treinamento físico, tais como CrossFit,
          Tabata, HIIT, exercícios de Atletismo, entre outros.
        </p>
        <p>
          Qualquer dúvida a respeito de qualquer um destes treinamentos/métodos ou se você está
          apto(a) a praticá-los, dê uma pesquisa no querido Google.
        </p>
        <p>
          Os treinos são sorteados todos os dias, ou seja, cada dia haverá um treinamento diferente
          do dia anterior, pois cada etapa será dividida e sorteada de acordo com o nível de
          treinamento escolhido e o tempo de treino. Em geral a quantidade de exercícios e a
          quantidade de repetições serão os fatores mais afetados. Alguns treinos não serão
          sorteados caso sejam marcadas as opções de 1º nível.
        </p>

        <p>Todo treinamento é composto por 3 etapas:</p>

        <p>Aquecimento, Treino Principal / WOD e Desaquecimento / Relaxamento.</p>

        <p>
          O aquecimento contém exercícios mais simples ou preparativos para o Treino Principal/WOD.
          Existem dezenas de exercícios utilizando apenas o peso do próprio corpo e uma barra
          (pull-up) preparados para deixar o corpo todo em ação!
        </p>

        <p>
          O treino principal é sorteado entre 9 tipos de metodologias divididas no Endorfina, entre
          eles WODs do CrossFit; uma "simples" corrida de rua, com a quilometragem variando em
          decorrência de seu nível; até mesmo um treinamento de Yoga visando melhorar a
          flexibilidade.
        </p>

        <p>
          O relaxamento ao fim da intensa rotina de treino lhe ajudará a proporcionar uma
          recuperação geral do corpo de forma mais acelerada e segura, com intensão de evitar lesões
          à longo prazo.
        </p>
      </article>

      <p>Seu número da sorte é: {Chance().d100()}</p>

      <h5>O treino de hoje será:</h5>
      <p>{wod ? wod.name : null}</p>
      <p>{wod ? wod.description : null}</p>
      <p>{wod ? wod.exercises : null}</p>

      <p>Link para consulta:</p>
      <p>https://medium.com/@wodify/the-15-best-crossfit-wods-for-beginners-part-2-2911e71607c</p>
      <p>https://wodfever.com/blogs/new-posts/20-crossfit-workouts-you-can-do-at-home</p>
      <p>
        https://www.bubsnaturals.com/blogs/blog/crossfit-workouts-to-try-in-your-next-gym-session
      </p>
      <button onClick={handleLogout} className="btn btn-danger m-3">
        Sair
      </button>
    </main>
  );
};

export default Game;
