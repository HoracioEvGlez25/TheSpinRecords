import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../images/LogoSpinRecords.png'; // Asegúrate de que la ruta sea correcta

function BoardNavigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catalog">Catálogo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">Acerca de</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Iniciar Sesión</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Registrarse</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BoardNavigation;



