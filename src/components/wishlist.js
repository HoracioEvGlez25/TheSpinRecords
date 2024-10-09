import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wishlist = ({ wishlistItems, removeFromWishlist }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Lista de Deseos</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-center">No hay productos en la lista de deseos.</p>
      ) : (
        <div className="row">
          {wishlistItems.map(product => (
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
                    className="btn btn-danger mt-2"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    Eliminar de la Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
