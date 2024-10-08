import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar'; 

function Product({ addToCart }) { 
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch(error => console.error('Error al cargar el producto:', error));
  }, [id]);

  if (!product) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div className="container my-5">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2>{product.title}</h2>
      <p>Artista: {product.artist}</p>
      <p>Precio: {product.price}</p>
      <p>Descripción: {product.description}</p>
      <img src={product.imageUrl} alt={product.title} className="img-fluid" />
      <button 
        className="btn btn-primary mt-3" 
        onClick={() => addToCart(product)} // Llama a addToCart al hacer clic
      >
        Agregar al Carrito
      </button>
    </div>
  );
}

export default Product;