import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';

function Catalog({ addToCart, addToWishlist }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('A-Z');

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setProducts(data);
      })
      .catch(error => console.error('Error al cargar productos:', error));
  }, []);

  const parsePrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  };

  const sortProducts = (products, option) => {
    switch (option) {
      case 'A-Z':
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case 'Z-A':
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      case 'price-low-high':
        return [...products].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case 'price-high-low':
        return [...products].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      default:
        return products;
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = products.filter(product => 
    product.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = sortProducts(filteredProducts, sortOption);

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
      🎶 Nuestro Catálogo de Vinilos 🎶
     </h2>
     
      <div className="mb-4 text-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <label htmlFor="sortOption" className="mr-2">Ordenar por:</label>
        <select
          id="sortOption"
          className="form-control d-inline-block w-auto"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="A-Z">Nombre (A-Z)</option>
          <option value="Z-A">Nombre (Z-A)</option>
          <option value="price-low-high">Precio (Menor a Mayor)</option>
          <option value="price-high-low">Precio (Mayor a Menor)</option>
        </select>
      </div>

      <div className="my-4">
        <img 
          src="/VBackG.jpg" 
          alt="Imagen destacada del catálogo" 
          className="img-fluid rounded shadow" 
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} 
        />
      </div>

      {sortedProducts.length === 0 ? (
        <div className="text-center">No se encontraron resultados.</div>
      ) : (
        <div className="row">
          {sortedProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img src={product.imageUrl} className="card-img-top" alt={product.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Artista: {product.artist}</p>
                  <p className="card-text text-primary">{product.price}</p>
                  <p className="card-text">Género: {product.genre}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">Ver detalles</Link>
                  <button
                    className="btn btn-secondary mt-2"
                    onClick={() => addToCart(product)}
                  >
                    Agregar al Carrito
                  </button>
                  <button
                    className="btn btn-outline-danger mt-2"
                    onClick={() => addToWishlist(product)}
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

export default Catalog;
