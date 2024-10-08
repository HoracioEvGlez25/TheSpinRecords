import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Catalog from './components/catalog';
import BoardNavigation from './components/board-navigation';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import About from './components/about';
import Product from './components/products';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <BoardNavigation />
        <main className="flex-fill">
          <section className="container my-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product/:id" element={<Product />} />
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
