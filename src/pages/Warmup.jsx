import React, { useEffect, useContext, useState } from 'react';
import EndorfinaContext from '../context';
import { useHistory } from 'react-router-dom';

import { Chance } from 'chance';

import warmupExercises from '../data/warmup';

const chance = Chance();

const Warmup = () => {
  const history = useHistory();
  const { userData, setUserData } = useContext(EndorfinaContext);

  const [group, setGroup] = useState(1);

  const [disableButton, setDisableButton] = useState(false);

  const [buttonFinish, setButtonFinish] = useState(false);

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    localStorage.getItem('userData')
      ? setUserData(JSON.parse(localStorage.getItem('userData')))
      : history.push('/');
  }, []);

  const defineExercisesQuantity = () => {
    // define quantos exercícios terão em cada grupo.
    // ao final se a dispo for baixa tira 1 exercício de cada grupo.
    let quantity;
    switch (group) {
      case 1:
        quantity = 2;
        break;
      case 2:
        quantity = 4;
        break;
      default:
        quantity = 3;
        break;
    }
    if (userData.mood === 'mal' || userData.active === 'sedentario') {
      return quantity - 1;
    }
    return quantity;
  };

  const generateWarmup = async () => {
    // gera os exercícios e a quantidade de repetições de acordo com o nível de treinamento.
    // chamo a função que define a quantidade de exercícios e sorteio o array usando pickset do Chance.
    // pra cada exercício eu crio uma chave reps passando um intervalo de reps pra cada nível.
    // ao final tiro 4 reps de cada exercício caso a dispo seja baixa.

    const exercisesQtt = defineExercisesQuantity();

    const randomWarmup = chance.pickset(warmupExercises, exercisesQtt);

    randomWarmup.forEach((ex) => {
      switch (userData.level) {
        case 'Aprendiz':
          ex.reps = chance.integer({ min: 5, max: 15 });
          break;
        case 'Guerreiro':
          ex.reps = chance.integer({ min: 8, max: 25 });
          break;
        default:
          ex.reps = chance.integer({ min: 12, max: 30 });
          break;
      }
      if (userData.mood === 'mal') ex.reps -= 4;
    });

    setExercises(randomWarmup);

    setDisableButton(true);

    setButtonFinish(true);
  };

  const handleNextGroup = () => {
    setGroup(group + 1);

    setDisableButton(false);

    setButtonFinish(false);
    if (group === 3) {
      return history.push('/game');
    }
    setExercises([]);
  };

  return (
    <div className="container">
      <section className="card m-3 p-2">
        <h3>Como o app é interativo, agora vamos "criar" o aquecimento.</h3>
        <p>
          O aquecimento será dividido em 3 grupos de exercícios. Cada grupo terá as repetições de
          exercícios sorteados, dependendo da disposição do dia e do seu nível de treinamento.
        </p>
        <p>
          Se sua disposição não estiver boa, serão feitas alterações na quantidade de rounds e reps.
        </p>
        <p>Entre cada grupo de exercícios descanse no máximo 2 minutos.</p>
        <p>Faça os exercícios de cada grupo do aquecimento na ordem em que desejar.</p>
      </section>

      <section className="card m-3 p-2">
        <h3>Exercícios do grupo {group}</h3>

        <button disabled={disableButton} className="btn btn-warning w-25" onClick={generateWarmup}>
          Gerar Exercícios
        </button>

        <section className="d-flex p-1 m-2">
          {exercises.map((ex, index) => (
            <div className="card align-items-center w-50 text-center m-2 p-2" key={ex.name}>
              <p>
                Exercício {index + 1}: {ex.name}
              </p>
              {ex.img ? <img width="160px" src={ex.img} alt="img" /> : null}
              <p>{ex.reps === 1 ? 2 : ex.reps} reps</p>
              <small>{ex.description}</small>
            </div>
          ))}
        </section>

        {buttonFinish ? (
          <button onClick={handleNextGroup} className="btn btn-danger">
            warm-up finished
          </button>
        ) : null}
      </section>
    </div>
  );
};

export default Warmup;
