import React from 'react';
import useModal from 'react-hooks-use-modal';

const modalStyle = {
  width: '300px',
  backgroundColor: 'yellow',
};

const treinamento = {
  p1: 'Aprendiz: menos de 1 ano de treino.',
  p2: 'Guerreiro: entre 1 ano e 5 anos de treino.',
  p3: 'Samurai: mais de 3 anos de treino.',
};
const sedentarismo = {
  p1: 'sedentário: no mínimo 1 mês de treino',
  p2: 'amador: entre 3 e 6 meses de treino sem interrupções.',
  p3: 'atleta: mais de 1 ano de treino sem interrupções',
};
const dispo = {
  // p1: '\uD83D\uDE00 - Estou muito bem hoje!',
  p1: 'opção 1: estou me sentindo muito bem hoje!',
  p2: 'opção 2: pronto pra treinar...',
  p3: 'opação 3: não estou 100%, mas não perco o treino!',
};
const Modal = ({ title }) => {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
  });

  const finalText = () => {
    switch (title) {
      case 'Treinamento':
        return treinamento.p1;
      case 'Sedentarismo':
        return treinamento.p2;
      default:
        return treinamento.p3;
    }
  };

  return (
    <span>
      <small style={{ cursor: 'pointer' }} onClick={open} className="float-right">
        <i className="far fa-question-circle"></i>
      </small>

      <Modal>
        <div className="card p-2 m-2" style={modalStyle}>
          <h2 className="card-title">{title}</h2>
          <p>
            {title === 'Treinamento'
              ? treinamento.p1
              : title === 'Sedentarismo'
              ? sedentarismo.p1
              : dispo.p1}
          </p>
          <p>
            {title === 'Treinamento'
              ? treinamento.p2
              : title === 'Sedentarismo'
              ? sedentarismo.p2
              : dispo.p2}
          </p>
          <p>
            {title === 'Treinamento'
              ? treinamento.p3
              : title === 'Sedentarismo'
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
