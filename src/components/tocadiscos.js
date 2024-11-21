import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';

function TocaDiscos({ addToCart, addToWishlist }) {
  const [tocadiscos, setTocadiscos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('A-Z');

  useEffect(() => {
    fetch('/TD.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTocadiscos(data);
      })
      .catch((error) => console.error('Error al cargar tocadiscos:', error));
  }, []);

  const parsePrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ''));
  };

  const sortTD = (tocadiscos, option) => {
    switch (option) {
      case 'A-Z':
        return [...tocadiscos].sort((a, b) => a.name.localeCompare(b.name));
      case 'Z-A':
        return [...tocadiscos].sort((a, b) => b.name.localeCompare(a.name));
      case 'price-low-high':
        return [...tocadiscos].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case 'price-high-low':
        return [...tocadiscos].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      default:
        return tocadiscos;
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = tocadiscos.filter((tocadisco) =>
    tocadisco.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTD = sortTD(filteredProducts, sortOption);

  return (
    <div
      className="container my-5 p-4"
      style={{
        background: 'linear-gradient(135deg, #f9f9f9, #e9ecef)',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="my-4">
        <img
          src="/TDBackG.jpg"
          alt="Imagen destacada del catálogo"
          className="img-fluid rounded shadow"
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '10px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      <h2
        className="text-center mb-4"
        style={{
          background: 'linear-gradient(90deg, #007bff, #00c6ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontWeight: 'bold',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        Nuestro Catálogo de Tocadiscos
      </h2>

      <div className="mb-4 text-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="mt-3">
          <label
            htmlFor="sortOption"
            className="mr-2"
            style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
          >
            Ordenar por:
          </label>
          <select
            id="sortOption"
            className="form-control d-inline-block w-auto"
            value={sortOption}
            onChange={handleSortChange}
            style={{
              borderRadius: '10px',
              padding: '5px 15px',
              fontWeight: '500',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <option value="A-Z">Nombre (A-Z)</option>
            <option value="Z-A">Nombre (Z-A)</option>
            <option value="price-low-high">Precio (Menor a Mayor)</option>
            <option value="price-high-low">Precio (Mayor a Menor)</option>
          </select>
        </div>
      </div>

      {sortedTD.length === 0 ? (
        <div className="text-center">
          <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>No se encontraron resultados.</p>
        </div>
      ) : (
        <div className="row">
          {sortedTD.map((tocadisco) => (
            <div className="col-md-4 mb-4" key={tocadisco.id}>
              <div
                className="card h-100"
                style={{
                  border: 'none',
                  borderRadius: '15px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <img
                  src={tocadisco.imageUrl}
                  alt={tocadisco.name}
                  className="card-img-top"
                  style={{
                    borderRadius: '15px 15px 0 0',
                    objectFit: 'cover',
                    height: '200px',
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ fontWeight: 'bold', color: '#343a40' }}>
                    {tocadisco.name}
                  </h5>
                  <p className="card-text text-muted">Marca: {tocadisco.brand}</p>
                  <p
                    className="card-text"
                    style={{
                      fontWeight: 'bold',
                      color: '#007bff',
                    }}
                  >
                    {tocadisco.price}
                  </p>
                  <p className="card-text text-muted">Tipo: {tocadisco.type}</p>
                  <Link
                    to={`/detailstd/${tocadisco.id}`}
                    className="btn btn-primary mt-auto"
                    style={{
                      borderRadius: '20px',
                      fontWeight: '500',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    Ver detalles
                  </Link>
                  <button
                    className="btn btn-secondary mt-2"
                    style={{
                      borderRadius: '20px',
                      fontWeight: '500',
                    }}
                    onClick={() => addToCart(tocadisco)}
                  >
                    Agregar al Carrito
                  </button>
                  <button
                    className="btn btn-outline-danger mt-2"
                    style={{
                      borderRadius: '20px',
                      fontWeight: '500',
                    }}
                    onClick={() => addToWishlist(tocadisco)}
                  >
                    Agregar a Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TocaDiscos;
