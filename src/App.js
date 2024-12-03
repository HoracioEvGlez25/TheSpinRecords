import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
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
import PurchaseOrder from './components/PurchaseOrder'; 

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
    alert(`${product.title} ha sido agregado al carrito! `);
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
              <Route path="/PurchaseOrder" element={<PurchaseOrder carrito={cartItems} onConfirmarCompra={() => alert('Compra Confirmada!')} descuento={10} />} />
            </Routes>
          </section>
        </main>
        <footer 
  className="footer" 
  style={{ 
    backgroundColor: '#212529', 
    color: '#f8f9fa', 
    textAlign: 'center', 
    padding: '2rem 1rem', 
    boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.5)', 
    fontFamily: "'Poppins', sans-serif" 
  }}
>
  <div className="container">
    <div className="row">
      <div 
        className="col-md-4 mb-3" 
        style={{ 
          padding: '1rem', 
          borderRadius: '8px', 
          background: 'rgba(255, 255, 255, 0.1)', 
          transition: 'transform 0.3s ease-in-out' 
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h5 className="text-uppercase" style={{ borderBottom: '2px solid #ffc107', paddingBottom: '0.5rem' }}>
          Acerca de
        </h5>
        <p>Spin Records es tu tienda de discos en línea, donde puedes encontrar los mejores vinilos de todos los géneros.</p>
      </div>
      <div 
        className="col-md-4 mb-3" 
        style={{ 
          padding: '1rem', 
          borderRadius: '8px', 
          background: 'rgba(255, 255, 255, 0.1)', 
          transition: 'transform 0.3s ease-in-out' 
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h5 className="text-uppercase" style={{ borderBottom: '2px solid #ffc107', paddingBottom: '0.5rem' }}>
          Enlaces Rápidos
        </h5>
        <ul className="list-unstyled">
          <li><a href="/" className="text-light" style={{ textDecoration: 'none' }}>Inicio</a></li>
          <li><a href="/catalog" className="text-light" style={{ textDecoration: 'none' }}>Catálogo</a></li>
          <li><a href="/wishlist" className="text-light" style={{ textDecoration: 'none' }}>Lista de Deseos</a></li>
          <li><a href="/about" className="text-light" style={{ textDecoration: 'none' }}>Sobre Nosotros</a></li>
        </ul>
      </div>
      <div 
        className="col-md-4 mb-3" 
        style={{ 
          padding: '1rem', 
          borderRadius: '8px', 
          background: 'rgba(255, 255, 255, 0.1)', 
          transition: 'transform 0.3s ease-in-out' 
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h5 className="text-uppercase" style={{ borderBottom: '2px solid #ffc107', paddingBottom: '0.5rem' }}>
          Contáctanos
        </h5>
        <p>Si tienes preguntas, no dudes en enviarnos un correo electrónico:</p>
        <a href="mailto:spinrecords@gmail.com" className="text-light" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          spinrecords@gmail.com
        </a>
      </div>
    </div>
    <div className="text-center mb-4">
      <img 
        src="/LogoSpinRecords.png" 
        alt="Logo Spin Records" 
        style={{ 
          width: '150px', 
          height: 'auto', 
          margin: '1rem 0', 
          transition: 'transform 0.3s ease-in-out' 
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(10deg)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
      />
    </div>
    <hr style={{ borderTop: '1px solid #ffc107' }} />
    <div className="text-center">
      <p className="mb-1">© 2024 Spin Records. Todos los derechos reservados.</p>
      <p>Síguenos en nuestras redes sociales:</p>
      <div>
        <a href="#" className="text-light me-3" style={{ transition: 'color 0.3s', color: '#f8f9fa' }} onMouseOver={(e) => e.currentTarget.style.color = '#1877f2'} onMouseOut={(e) => e.currentTarget.style.color = '#f8f9fa'}>
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-light me-3" style={{ transition: 'color 0.3s', color: '#f8f9fa' }} onMouseOver={(e) => e.currentTarget.style.color = '#1da1f2'} onMouseOut={(e) => e.currentTarget.style.color = '#f8f9fa'}>
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-light" style={{ transition: 'color 0.3s', color: '#f8f9fa' }} onMouseOver={(e) => e.currentTarget.style.color = '#c13584'} onMouseOut={(e) => e.currentTarget.style.color = '#f8f9fa'}>
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  </div>
</footer>
      </div>
    </Router>
  );
}

export default App;
