import React from 'react';

import { Link } from 'react-router-dom';

import { Menu } from 'antd';

const Menu2 = () => {
  return (
    <Menu>
      <Link className="nav-link active" aria-current="page" to="/main">
        Início
      </Link>

      <Link className="nav-link" to="/warmup">
        Aquecimento
      </Link>
      <Link className="nav-link" to="/game">
        Treinamento
      </Link>
      <Link className="nav-link" to="/">
        Contato
      </Link>
    </Menu>
  );
};

export default Menu2;
