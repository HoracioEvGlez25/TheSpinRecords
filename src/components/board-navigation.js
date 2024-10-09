import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function BoardNavigation({ cartItems, removeFromCart }) {
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [turntables, setTurntables] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/path/to/product.json');
      const data = await response.json();
      setProducts(data);
    };

    const fetchTurntables = async () => {
      const response = await fetch('/path/to/td.json');
      const data = await response.json();
      setTurntables(data);
    };

    fetchProducts();
    fetchTurntables();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const allItems = [...products, ...turntables];
    const results = allItems.filter(item =>
      item.title?.toLowerCase().includes(term.toLowerCase()) ||
      item.name?.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredResults(results);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Spin Records</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={showCart ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <ul className="navbar-nav me-auto">
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
              <Link className="nav-link" to="/wishlist">Wishlist</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Iniciar Sesión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Registrarse</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Perfil de Usuario</Link>
            </li>
          </ul>

          <button 
            className="btn btn-outline-light" 
            style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', width: '80px' }} 
            onClick={toggleCart}
          >
            Carrito ({cartItems.length})
          </button>
        </div>
      </div>

      {showCart && (
        <div className="position-absolute bg-white p-3 border" style={{ right: 10, top: 60, zIndex: 1, width: '300px' }}>
          <h5>Productos en el Carrito</h5>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul className="list-unstyled">
              {cartItems.map((item) => (
                <li key={item.id} className="mb-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }} 
                    />
                    <strong>{item.title}</strong>
                    <span className="text-muted ms-2">${item.price}</span>
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
          {cartItems.length > 0 && (
            <button className="btn btn-primary btn-block mt-3">
              Realizar Compra
            </button>
          )}
        </div>
      )}

      {searchTerm && filteredResults.length > 0 && (
        <div className="position-absolute bg-white p-3 border" style={{ right: 5, top: 150, zIndex: 1, width: '20px' }}>
          <h5>Resultados de búsqueda</h5>
          <ul className="list-unstyled">
            {filteredResults.map(item => (
              <li key={item.id} className="mb-2">
                <div className="d-flex align-items-center">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title || item.name} 
                    style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }} 
                  />
                  <strong>{item.title || item.name}</strong>
                  <span className="text-muted ms-2">${item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default BoardNavigation;
