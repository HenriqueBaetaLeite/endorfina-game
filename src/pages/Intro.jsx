import React, { useState, useContext } from 'react';
import EndorfinaContext from '../context';

function Intro() {
  const { userData, setUserData } = useContext(EndorfinaContext);
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  console.log(userData);

  return (
    <form className="form-intro">
      <label htmlFor="name">Nome / Apelido</label>
      <input name="name" type="text" onChange={(event) => handleChange(event)} />

      <label htmlFor="level">Escolha seu nível</label>
      <select name="level" id="level" onChange={(event) => handleChange(event)}>
        <option value="">Escolha</option>
        <option value="Aprendiz">aprendiz</option>
        <option value="Guerreiro">guerreiro</option>
        <option value="Samurai">samurai</option>
      </select>

      <label htmlFor="active">Nível de sedentarismo</label>
      <select name="active" id="active" onChange={(event) => handleChange(event)}>
        <option value="">Escolha</option>
        <option value="sedentario">sedentário</option>
        <option value="int">amador</option>
        <option value="ativo">atleta</option>
      </select>
      <small>?</small>

      <label htmlFor="dispo">Disposição do dia</label>
      <input id="bom" name="dispo" type="radio" value="bom" />
      <label htmlFor="bom">
        <span>&#128515;</span>
      </label>
      {/* tbm pode ser: &#x1F603; */}
      <input id="regular" name="dispo" type="radio" />
      <label htmlFor="regular">
        <span>&#128528;</span>
      </label>
      {/* tbm pode ser: &#x1F610; */}
      <input id="mal" name="dispo" type="radio" />
      <label htmlFor="mal">
        <span>&#128545;</span>
      </label>
      {/* tbm pode ser: &#x1F621; */}
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Intro;
