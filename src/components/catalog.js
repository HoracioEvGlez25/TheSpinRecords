import React from 'react';


const products = [
  {
    id: 1,
    title: "Álbum 1",
    artist: "Artista 1",
    imageUrl: "https://via.placeholder.com/150", // Reemplaza con la URL real de la imagen
    price: "$200.00"
  },
  {
    id: 2,
    title: "Álbum 2",
    artist: "Artista 2",
    imageUrl: "https://via.placeholder.com/150", // Reemplaza con la URL real de la imagen
    price: "$250.00"
  },
  {
    id: 3,
    title: "Álbum 3",
    artist: "Artista 3",
    imageUrl: "https://via.placeholder.com/150", // Reemplaza con la URL real de la imagen
    price: "$300.00"
  }
];

function Catalog() {
  return (
    <div className="catalog-container">
      <h2>Este es el catálogo de discos</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img src={product.imageUrl} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Artista: {product.artist}</p>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary">Agregar al Carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;