import React, { useEffect, useState } from 'react';

import { Spin } from 'antd';

import { Chance } from 'chance';

import createTrainingDay from '../utils/createTrainingDay';

import exercisesTypes from '../data/exercisesTypes';

const Game = () => {
  const [trainingType, setTrainingType] = useState(null);

  const [wod, setWod] = useState([]);

  useEffect(() => {
    const newTraining = Chance().pickone(exercisesTypes);
    setTrainingType(newTraining);
    console.log(newTraining);
  }, []);

  const generateTraining = () => {
    const wodDay = createTrainingDay(trainingType.name);
    setWod([wodDay]);
  };

  return (
    <main className="container">
      <h3>Agora sim é hora do treino!</h3>
      <p>
        Após o aquecimento descanse alguns minutos e aproveita para dar uma olhada com atenção no
        treinamento.
      </p>
      {!trainingType ? (
        <Spin />
      ) : (
        <div>
          <p>Seu treino de hoje será: {trainingType.name}</p>
          <p>{trainingType.description}</p>
        </div>
      )}

      <section className="card">
        <p>Hora de gerar os exercícios correspondentes ao treinamento do dia.</p>
        <p>Os exercícios serão baseados no tipo de treinamento descrito acima.</p>
        <button onClick={generateTraining} className="btn btn-success w-25">
          Gerar treino
        </button>
        {wod.map((el) => (
          <div key={el.name}>
            <p>{el.name}</p>
            <p>{el.description}</p>
            <p>{el.exercises}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Game;
