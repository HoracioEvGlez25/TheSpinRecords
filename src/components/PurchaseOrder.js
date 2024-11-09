import React, { useState, useEffect } from 'react';

const PurchaseOrder = ({ carrito = [], onConfirmarCompra, descuento = 0 }) => {
  const [productos, setProductos] = useState([]);
  const [carritoActualizado, setCarritoActualizado] = useState(carrito);
  const [total, setTotal] = useState(0);
  const [impuestos, setImpuestos] = useState(0);
  const [totalFinal, setTotalFinal] = useState(0);

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al cargar los productos:', error));
  }, []);

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    const carritoModificado = carritoActualizado.map(item =>
      item.id === id ? { ...item, cantidad } : item
    );
    setCarritoActualizado(carritoModificado);
  };

  useEffect(() => {
    const nuevoTotal = carritoActualizado.reduce((acumulado, item) => {
      const productoDetails = productos.find(p => p.id === item.id);
      const precio = productoDetails ? productoDetails.price : 0;
      return acumulado + precio * (item.cantidad || 1);
    }, 0);

    const nuevosImpuestos = nuevoTotal * 0.10;
    const nuevoTotalFinal = nuevoTotal + nuevosImpuestos;

    setTotal(nuevoTotal);
    setImpuestos(nuevosImpuestos);
    setTotalFinal(nuevoTotalFinal);
  }, [carritoActualizado, productos, descuento]);

  return (
    <div style={styles.purchaseOrder}>
      <h2 style={styles.title}>Completar compra</h2>

      {carritoActualizado.length === 0 ? (
        <p>No tienes productos en tu carrito.</p>
      ) : (
        <div>
          {carritoActualizado.map((producto, index) => {
            const productoDetails = productos.find(p => p.id === producto.id) || {};

            return (
              <div key={index} style={styles.productItem}>
                {productoDetails.imageUrl && (
                  <img
                    src={productoDetails.imageUrl}
                    alt={productoDetails.title || 'Imagen del producto'}
                    style={styles.productImage}
                  />
                )}
                <div style={styles.productDetails}>
                  <span style={styles.productName}>{productoDetails.title || 'Producto no encontrado'}</span>
                  <div style={styles.productPrice}>
                    <span>Precio: {productoDetails.price ? `$${productoDetails.price}` : 'No disponible'}</span>
                    <span>Total: {productoDetails.price && producto.cantidad ? `$${(productoDetails.price * producto.cantidad).toFixed(2)}` : 'No disponible'}</span>
                  </div>
                  <div style={styles.quantitySection}>
                    <input
                      type="number"
                      value={producto.cantidad}
                      min="1"
                      style={styles.inputCantidad}
                      onChange={(e) => actualizarCantidad(producto.id, parseInt(e.target.value))}
                    />
                    <span>Cantidad</span>
                  </div>
                </div>
              </div>
            );
          })}

          <div style={styles.totalSection}>
            <div>
              <h3>Total a pagar: ${total.toFixed(2)}</h3>
              <h4>Impuestos (10%): ${impuestos.toFixed(2)}</h4>
              <h3>Total Final: ${totalFinal.toFixed(2)}</h3>
            </div>
            <button style={styles.confirmButton} onClick={onConfirmarCompra}>
              Confirmar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  purchaseOrder: {
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  productItem: {
    display: 'flex',
    borderBottom: '1px solid #eee',
    paddingBottom: '20px',
    marginBottom: '20px',
    alignItems: 'center',
  },
  productImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '20px',
  },
  productDetails: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  productName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
  },
  productPrice: {
    fontSize: '16px',
    marginTop: '10px',
    color: '#555',
  },
  quantitySection: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  inputCantidad: {
    width: '50px',
    padding: '5px',
    textAlign: 'center',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  totalSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
    borderTop: '1px solid #ddd',
    paddingTop: '20px',
  },
  confirmButton: {
    padding: '12px 30px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    alignSelf: 'flex-end',
    transition: 'background-color 0.3s ease',
  },
};

export default PurchaseOrder;

