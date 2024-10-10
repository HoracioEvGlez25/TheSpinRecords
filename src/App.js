import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Catalog from './components/catalog';
import Wishlist from './components/wishlist';  
import TocaDiscos from './components/tocadiscos'; 
import BoardNavigation from './components/board-navigation';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import About from './components/about';
import Product from './components/products';  
import UserProfile from './components/UserProfile';
import DetailsTD from './components/DetailsTD';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]); 

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.title} ha sido agregado al carrito!`);
  };

  const addToWishlist = (product) => {
    setWishlistItems((prevWishlist) => {
      if (!prevWishlist.some((item) => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
    alert(`${product.title} ha sido agregado a la wishlist!`);
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <BoardNavigation cartItems={cartItems} /> 
        <main className="flex-fill">
          <section className="container my-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog addToCart={addToCart} addToWishlist={addToWishlist} />} /> 
              <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} /> 
              <Route path="/tocadiscos" element={<TocaDiscos addToCart={addToCart} addToWishlist={addToWishlist} />} /> 
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/DetailsTD/:id" element={<DetailsTD />} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </section>
        </main>
        <footer className="footer bg-dark text-light text-center text-md-left mt-4">
          <div className="container py-4">
            <div className="row">
              <div className="col-md-4 mb-3">
                <h5 className="text-uppercase">Acerca de</h5>
                <p>Spin Records es tu tienda de discos en línea, donde puedes encontrar los mejores vinilos de todos los géneros.</p>
              </div>
              <div className="col-md-4 mb-3">
                <h5 className="text-uppercase">Enlaces Rápidos</h5>
                <ul className="list-unstyled">
                  <li><a href="/" className="text-light">Inicio</a></li>
                  <li><a href="/catalog" className="text-light">Catálogo</a></li>
                  <li><a href="/wishlist" className="text-light">Lista de Deseos</a></li>
                  <li><a href="/about" className="text-light">Sobre Nosotros</a></li>
                  <li><a href="/contact" className="text-light">Contacto</a></li>
                </ul>
              </div>
              <div className="col-md-4 mb-3">
                <h5 className="text-uppercase">Contáctanos</h5>
                <p>Si tienes preguntas, no dudes en enviarnos un correo electrónico:</p>
                <a href="mailto:spinrecords@gmail.com" className="text-light">spinrecords@gmail.com</a>
              </div>
            </div>
            <hr className="bg-light" />
            <div className="text-center">
              <p className="mb-1">© 2024 Spin Records. Todos los derechos reservados 2024.</p>
              <p>Síguenos en nuestras redes sociales:</p>
              <a href="#" className="text-light me-3">Facebook.</a>
              <a href="#" className="text-light me-3">Twitter.</a>
              <a href="##########" className="text-light">Instagram...</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
