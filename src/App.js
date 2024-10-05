import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Catalog from './components/catalog';
import BoardNavigation from './components/board-navigation';
import Login from './components/login'; 
import Register from './components/register'; 

function App() {
  return (
    <Router>
      <div className="App">
        <BoardNavigation />
        <header className="App-header">
          <h1>Bienvenido a Spin Records</h1>
          <p>Encuentra los mejores discos de vinilo de todos los géneros.</p>
          <button className="btn btn-primary">Ver Catálogo</button>
        </header>

        <section>
          <Routes>
            <Route path="/" element={<Catalog />} />  {/* Ruta principal que muestra el catálogo */}
            <Route path="/login" element={<Login />} />  {/* Ruta para inicio de sesión */}
            <Route path="/register" element={<Register />} />  {/* Ruta para registro */}
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
