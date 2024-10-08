// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Catalog from './components/catalog';
import TocaDiscos from './components/tocadiscos'; // Importa el nuevo componente
import BoardNavigation from './components/board-navigation';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import About from './components/about';
import Product from './components/products';  
import UserProfile from './components/UserProfile';
import DetailsTD from './components/DetailsTD';

function App() {
  const [cartItems, setCartItems] = useState([]); // Estado para los productos del carrito

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); // Agrega el producto al carrito
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId)); // Filtra el producto por ID
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <BoardNavigation cartItems={cartItems} removeFromCart={removeFromCart} /> {/* Pasa removeFromCart a BoardNavigation */}
        <main className="flex-fill">
          <section className="container my-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog addToCart={addToCart} />} /> {/* Pasa addToCart a Catalog */}
              <Route path="/tocadiscos" element={<TocaDiscos addToCart={addToCart} />} /> {/* Pasa addToCart a TocaDiscos */}
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/DetailsTD/:id" element={<DetailsTD />} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </section>
        </main>
        <footer className="footer bg-light text-center text-muted">
          <div className="container">
            <p className="my-2">© 2024 Spin Records. Todos los derechos reservados.</p>
            <p className="my-2">Contáctanos y resuelve tus dudas a: <a href="mailto:horacionoel2001@gmail.com">horacionoel2001@gmail.com</a></p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

