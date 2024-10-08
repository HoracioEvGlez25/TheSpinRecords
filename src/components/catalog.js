import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('A-Z');

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
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
      case 'artist':
        return [...products].sort((a, b) => a.artist.localeCompare(b.artist));
      default:
        return products;
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = sortProducts(products, sortOption);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Este es el catálogo de discos</h2>

      <div className="mb-4 text-center">
        <label htmlFor="sortOption" className="mr-2">Ordenar por:</label>
        <select id="sortOption" className="form-control d-inline-block w-auto" value={sortOption} onChange={handleSortChange}>
          <option value="A-Z">Nombre (A-Z)</option>
          <option value="Z-A">Nombre (Z-A)</option>
          <option value="price-low-high">Precio (Menor a Mayor)</option>
          <option value="price-high-low">Precio (Mayor a Menor)</option>
          <option value="artist">Artista</option>
        </select>
      </div>

      <div className="row">
        {sortedProducts.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.imageUrl} className="card-img-top" alt={product.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Artista: {product.artist}</p>
                <p className="card-text text-primary">{product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">Ver detalles</Link>
                <button className="btn btn-primary mt-auto">Agregar al Carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
