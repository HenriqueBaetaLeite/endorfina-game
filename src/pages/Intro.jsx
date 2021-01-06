import React, { useState, useContext, useEffect } from 'react';
import EndorfinaContext from '../context';
import Modal from '../components/Modal';
import { useHistory } from 'react-router-dom';

const Intro = () => {
  const history = useHistory();
  const { userData, setUserData } = useContext(EndorfinaContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('userData'));
    console.log('Vindo do LocalStorage', userStorage);
    setUser(userStorage);
    if (userStorage) history.push('/game');
  }, []);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('userData', JSON.stringify(userData));
    history.push('/main');
  };

  console.log('userData vindo do context aqui', userData);
  console.log('user useState, q é setado no useffect: ', user);

  return (
    <main className="w-50 mx-auto container m-3">
      <form onSubmit={handleSubmit} className="form-intro card p-3" autoComplete="off">
        <div className="form-group">
          <label htmlFor="name">Nome / Apelido</label>
          <input
            placeholder="nickname"
            className="form-control"
            name="name"
            type="text"
            required
            onChange={(event) => handleChange(event)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="level">Nível de treinamento</label>
          <Modal title={'Treinamento'} />
          <select
            className="form-control"
            name="level"
            id="level"
            required
            onChange={(event) => handleChange(event)}
          >
            <option value="">Escolha</option>
            <option value="Aprendiz">aprendiz</option>
            <option value="Guerreiro">guerreiro</option>
            <option value="Samurai">samurai</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="active">Nível de sedentarismo</label>
          <Modal title={'Sedentarismo'} />

          <select
            className="form-control"
            name="active"
            id="active"
            required
            onChange={(event) => handleChange(event)}
          >
            <option value="">Escolha</option>
            <option value="sedentario">sedentário</option>
            <option value="amador">amador</option>
            <option value="atleta">atleta</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mood">Disposição do dia</label>
          <Modal title={'Disposição'} />
          <div className="form-check">
            <input
              className="form-check-input"
              id="bom"
              name="mood"
              type="radio"
              value="bom"
              required
              onChange={(event) => handleChange(event)}
            />
            <label className="form-check-label" htmlFor="bom">
              <span role="img" aria-label="label">
              <i className="far fa-laugh-wink"></i>
              </span>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="regular"
              name="mood"
              type="radio"
              value="regular"
              onChange={(event) => handleChange(event)}
            />
            <label className="form-check-label" htmlFor="regular">
              <span role="img" aria-label="label">
                <i className="far fa-meh-blank"></i>
              </span>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="mal"
              name="mood"
              type="radio"
              value="mal"
              onChange={(event) => handleChange(event)}
            />
            <label className="form-check-label" htmlFor="mal">
              <span role="img" aria-label="label">
                <i className="far fa-tired"></i>
              </span>
            </label>
          </div>
        </div>

        <button className="btn btn-dark w-75 mx-auto" type="submit">
          Entrar
        </button>
      </form>
    </main>
  );
};

export default Intro;
