const exercisesTypes = [
  {
    name: 'AMRAP',
    description:
      'As Many Round As Possible - Em determinado tempo, tentar fazer o máximo de séries de exercícios pre-determinados.',
  },
  {
    name: '21-15-9',
    description:
      'Exemplo: corda, push-up e pull-up. Executar 21 repetições de corda, 21 push-up e 21 pull-up, só pode passar pro próximo exercício quando terminar a série atual. Aí continua dessa maneira, executarndo 15 reps depois 9 reps.',
  },
  {
    name: '21-15-9-3',
    description: '',
  },
  {
    name: 'Corrida',
    description:
      'Marcar o tempo da corrida e o máximo de outras informações possíveis. Não será corrida aleatória, as distâncias são pre-determinadas (3km, 5km, 10km, 15km).',
  },
  {
    name: 'Rounds for Time',
    description: 'Completar um determinado número de séries o mais rápido possível.',
  },
  {
    name: 'Chipper',
    description:
      '1 série de exercícios pre-determinados, geralmente com repetições altas, para ser completada o mais rápido possível.',
  },
  {
    name: 'Ladder - Escada',
    description:
      'Um ou mais exercícios, aumentando ou diminuindo as repetições, exemplo: 1-10 reps de push-ups + 10-1 reps de abs. Faz 1 repetição de 1 exercício, depois do outro, faz 2 e assim vai.',
  },
  {
    name: 'Tabata',
    description: '',
  },
  {
    name: 'WOD`s',
    description: 'Wods já criados pela comunidade.',
  },
];

export default exercisesTypes;
