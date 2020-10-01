import React, { useContext } from 'react';
import EndorfinaContext from '../context';

function Welcome() {
  const { userData } = useContext(EndorfinaContext);
  return (
    <div>
      <p>
        Boas vindas {userData.level} {userData.name}
      </p>
      <p>Aqui começa seu treino / sua batalha!</p>
      <p>
        Você foi convocado para combater um grupo inimigo de --array de inimigos, tipo orcs, anão,
        goblin...--
      </p>
      <p>Role um dado para saber quantas fases terá sua batalha...</p>
    </div>
  );
}

export default Welcome;
