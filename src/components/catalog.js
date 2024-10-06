import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado

const products = [
  {
    id: 1,
    title: "Modern Life is Rubbish",
    artist: "Blur",
    imageUrl: "/MLisR.jpg",
    price: "$200.00"
  },
  {
    id: 2,
    title: "Humbug",
    artist: "Arctic Monkeys",
    imageUrl: "/Humbug.jpg",
    price: "$250.00"
  },
  {
    id: 3,
    title: "Blur",
    artist: "Blur",
    imageUrl: "/B.jpg",
    price: "$300.00"
  },
  {
    id: 4,
    title: "Gorillaz",
    artist: "Gorillaz",
    imageUrl: "/GG.jpg",
    price: "$300.00"
  },
  {
    id: 5,
    title: "The new abnormal",
    artist: "The Strokes",
    imageUrl: "/TNA.png",
    price: "$300.00"
  },
  {
    id: 6,
    title: "Favourite Worst Nightmare",
    artist: "Arctic Monkeys",
    imageUrl: "/FWNN.jpg",
    price: "$300.00"
  }
];

function Catalog() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Este es el catálogo de discos</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm"> {/* Añadir sombra para un efecto elegante */}
              <img src={product.imageUrl} className="card-img-top" alt={product.title} />
              <div className="card-body d-flex flex-column"> {/* Usar flexbox para organizar el contenido */}
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Artista: {product.artist}</p>
                <p className="card-text text-primary">{product.price}</p>
                <button className="btn btn-primary mt-auto">Agregar al Carrito</button> {/* mt-auto empuja el botón al final */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
