// BoardNavigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Buscar discos"
        aria-label="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  );
}

function BoardNavigation({ cartItems, removeFromCart }) {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

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
            <Link className="nav-link" to="/tocadiscos">Tocadiscos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Iniciar Sesión</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Registrarse</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Perfil de Usuario</Link> {/* Enlace al perfil de usuario */}
          </li>
        </ul>

        <button className="btn btn-outline-light" 
        style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', width: '80px' }} onClick={toggleCart}>
          Carrito ({cartItems.length})
        </button>
      </div>

      {showCart && (
        <div className="position-absolute bg-white p-3 border" style={{ right: 10, top: 60 }}>
          <h5>Productos en el Carrito</h5>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul className="list-unstyled">
              {cartItems.map((item) => (
                <li key={item.id} className="mb-2 d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.title}</strong><br />
                    <span>{item.description}</span><br />
                    <span className="text-muted">{item.price}</span>
                  </div>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)} 
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}

export default BoardNavigation;
