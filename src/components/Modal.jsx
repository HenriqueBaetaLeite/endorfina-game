import React from 'react';
import useModal from 'react-hooks-use-modal';

const modalStyle = {
  width: '300px',
  backgroundColor: 'lightblue',
};

const treinamento = {
  p1: 'Aprendiz: menos de 1 ano de treino.',
  p2: 'Guerreiro: entre 1 ano e 5 anos de treino.',
  p3: 'Samurai: mais de 3 anos de treino.',
};
const sedentarismo = {
  p1: 'amador: entre 3 e 6 meses de treino sem interrupções.',
  p2: 'atleta: mais de 1 ano de treino sem interrupções',
  p3: 'sedentário: no mínimo 1 mês de treino',
};
const dispo = {
  p1: '\uD83D\uDE00 - Estou muito bem hoje!',
  p2: 'Pronto pra treinar...',
  p3: 'Não estou 100%, mas não perco o treino!',
};
const Modal = ({ title, text }) => {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
  });

  return (
    <span>
      <small style={{ cursor: 'pointer' }} onClick={open} className="float-right">
        <i class="far fa-question-circle"></i>
      </small>

      <Modal>
        <div className="card p-2" style={modalStyle}>
          <h2>{title}</h2>
          <p>
            {text === 'treino'
              ? treinamento.p1
              : text === 'sedentarismo'
              ? sedentarismo.p1
              : dispo.p1}
          </p>
          <p>
            {text === 'treino'
              ? treinamento.p2
              : text === 'sedentarismo'
              ? sedentarismo.p2
              : dispo.p2}
          </p>
          <p>
            {text === 'treino'
              ? treinamento.p3
              : text === 'sedentarismo'
              ? sedentarismo.p3
              : dispo.p3}
          </p>
          <button className="btn btn-dark w-25 m-2 mx-auto" onClick={close}>
            close
          </button>
        </div>
      </Modal>
    </span>
  );
};

export default Modal;
