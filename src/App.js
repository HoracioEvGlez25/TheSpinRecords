import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Catalog from './components/catalog';
import BoardNavigation from './components/board-navigation';
import Login from './components/login';
import Register from './components/register';
import tiendaLogo from './components/images/LogoSpinRecords.png'; 

function App() {
  return (
    <Router>
      <div className="App">
        <BoardNavigation />
        <header className="App-header">
          <img src={tiendaLogo} alt="Logo de la tienda" className="tienda-logo" />
          <h1>Bienvenido a Spin Records</h1>
          <p>Encuentra los mejores discos de vinilo de todos los géneros.</p>
        </header>
      </div>

      <section>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
