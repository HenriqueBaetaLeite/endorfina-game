import React from 'react';
import { Link } from 'react-router-dom';

// MENU DO BOOTSTRAP

const MenuGlobal = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" aria-current="page" to="/main">
              Início
            </Link>
            <Link class="nav-link" to="/warmup">
              Treino
            </Link>
            <Link class="nav-link" to="/">
              Histórico de treino
            </Link>
            <Link class="nav-link" to="/">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuGlobal;
