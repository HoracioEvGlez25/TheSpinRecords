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
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTocadiscos(data);
      })
      .catch(error => console.error('Error al cargar tocadiscos:', error));
  }, []);

  const parsePrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
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

  const filteredProducts = tocadiscos.filter(tocadisco => 
    tocadisco.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTD = sortTD(filteredProducts, sortOption);

  return (
    <div className="container my-5">
      <h2
        className="text-center mb-4 font-bold text-transparent text-4xl"
        style={{
          background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        🎶 Nuestro Catálogo de Tocadiscos 🎶
      </h2>

      <div className="mb-4 text-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <label htmlFor="sortOption" className="mr-2">Ordenar por:</label>
        <select id="sortOption" className="form-control d-inline-block w-auto" value={sortOption} onChange={handleSortChange}>
          <option value="A-Z">Nombre (A-Z)</option>
          <option value="Z-A">Nombre (Z-A)</option>
          <option value="price-low-high">Precio (Menor a Mayor)</option>
          <option value="price-high-low">Precio (Mayor a Menor)</option>
        </select>
      </div>

      <div className="my-4">
        <img 
          src="/TDBackG.jpg" 
          alt="Imagen destacada del catálogo" 
          className="img-fluid rounded shadow" 
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} 
        />
      </div>

      {sortedTD.length === 0 ? (
        <div className="text-center">No se encontraron resultados.</div>
      ) : (
        <div className="row">
          {sortedTD.map(tocadisco => (
            <div className="col-md-4 mb-4" key={tocadisco.id}>
              <div 
                className="card h-100 shadow-sm"
                style={{ height: '100%' }} 
              >
                <img
                  src={tocadisco.imageUrl}
                  alt={tocadisco.name}
                  className="card-img-top"
                  style={{
                    height: '200px', 
                    width: '100%', 
                    objectFit: 'cover', 
                  }}
                />
                <div 
                  className="card-body d-flex flex-column"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 className="card-title">{tocadisco.name}</h5>
                  <p className="card-text">Marca: {tocadisco.brand}</p>
                  <p className="card-text text-primary">{tocadisco.price}</p>
                  <p className="card-text">Tipo: {tocadisco.type}</p>
                  <Link 
                    to={`/detailstd/${tocadisco.id}`} 
                    className="btn btn-primary mt-auto"
                  >
                    Ver detalles
                  </Link>
                  <button 
                    className="btn btn-primary mt-auto" 
                    onClick={() => addToCart(tocadisco)}
                  >
                    Agregar al Carrito
                  </button>
                  <button
                    className="btn btn-outline-danger mt-2"
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
