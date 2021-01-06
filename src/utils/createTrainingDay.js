import exercisesTypes from '../data/wods';

import { Chance } from 'chance';

const createTrainingDay = (trainingType) => {
  let wod;
  switch (trainingType) {
    case 'WOD':
      wod = Chance().pickone(exercisesTypes);
      console.log('função createTrainingDay', wod);
      break;
    case 'AMRAP':
      break;
    case 'Ladder':
      break;
    case 'Chipper':
      break;
    case 'Rounds for Time':
      break;
    case 'Corrida':
      break;
    case '21-15-9':
      break;
    case '21-15-9 INVERTIDO':
      break;
    case '21-15-9-3':
      break;
    case '21-15-9-3 INVERTIDO':
      break;
    default:
      break;
  }
  return wod;
};

export default createTrainingDay;
