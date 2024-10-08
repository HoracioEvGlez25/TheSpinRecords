import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams(); 
  const [tocadisco, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/TD.json`)
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch(error => console.error('Error al cargar el producto:', error));
  }, [id]);

  if (!tocadisco) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div className="container my-5">
      <h2>{tocadisco.title}</h2>
      <p>Artista: {tocadisco.artist}</p>
      <p>Precio: {tocadisco.price}</p>
      <p>Descripción: {tocadisco.description}</p>
      <img src={tocadisco.imageUrl} alt={tocadisco.title} className="img-fluid" />
      <button className="btn btn-primary mt-auto">Agregar a lista de deseos</button>
      <button className="btn btn-primary mt-auto">Agregar al Carrito</button>

    </div>
  );
}

export default Details;