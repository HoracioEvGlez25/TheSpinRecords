import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 

function BoardNavigation({ cartItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2e5173',
      padding: '30px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px'
      }}>
           <Link 
           to="/" 
           style={{ 
           color: 'white', 
           textDecoration: 'none', 
           fontSize: '18px', 
           fontWeight: 'bold', 
           display: 'flex', 
           alignItems: 'center', 
           gap: '10px' 
       }}
        >
<img 
  src="/LogoSpinRecords.png" 
  alt="Logo de Spin Records" 
  style={{
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
    borderRadius: '10px', 
    border: '2px solid #171a4a', 
    filter: 'contrast(110%) brightness(95%)', 
    transition: 'transform 0.3s, box-shadow 0.3s', 
  }} 
/>
        Spin Records
       </Link>
        <Link to="/catalog" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
          Vinilos
        </Link>
        <Link to="/TocaDiscos" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
          TocaDiscos
        </Link>
        <Link to="/wishlist" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
          Lista de Deseos
        </Link>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
          Iniciar Sesión
        </Link>
        <Link to="/register" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
          Registrarse
        </Link>
        <Link to="/profile" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
          Perfil del Usuario
        </Link>
        <span onClick={toggleCart} style={{ color: 'white', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center' }}>
          <FaShoppingCart style={{ marginRight: '8px' }} /> {/* Ícono del carrito */}
          Carrito ({cartItems.length})
        </span>
      </div>

      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: '20%',
          right: '20%',
          width: '300px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '20px',
          zIndex: 1000,
        }}>
          <h3>Carrito de Compras</h3>
          {cartItems.length > 0 ? (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cartItems.map((item) => (
                <li key={item.id} style={{ marginBottom: '10px' }}>
                  {item.title} - Cantidad: {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>El carrito está vacío</p>
          )}
          <button onClick={toggleCart} style={{
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: '#343a40',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>
            Cerrar
          </button>
          <button onClick={toggleCart} style={{
            marginLeft: '5px',
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: '#343a40',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>
            <Link to="/PurchaseOrder" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
              Completar compra
            </Link>
          </button>
        </div>
      )}
      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
        }} onClick={toggleCart}></div>
      )}
    </nav>
  );
}

export default BoardNavigation;
