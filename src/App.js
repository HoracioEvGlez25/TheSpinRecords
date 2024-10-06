import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Catalog from './components/catalog';
import BoardNavigation from './components/board-navigation';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

function App() {

  return (
    <Router>
        <BoardNavigation />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </section>
      <footer className="footer">
    <div className="container">
        <p className="text-muted">© 2024 Spin Records. Todos los derechos reservados.</p>
    </div>
</footer>
    </Router>
  );
}

export default App;
