import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';

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

  const manejarPagoStripe = (token) => {
    console.log('Pago simulado con Stripe:', token);
    alert('Pago realizado con éxito mediante Stripe. ¡Gracias por tu compra!');
  };

  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: totalFinal.toFixed(2)
              }
            }]
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            alert('¡Pago exitoso con PayPal!');
            window.location.href = "catalogo.php";
          });
        }
      }).render('#paypal-button-container');
    }
  }, [totalFinal]);

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
          </div>

          <div style={styles.paymentSection}>
            <div style={styles.paymentMethod}>
              <StripeCheckout
                stripeKey="sk_test_51QOOtG07A4BQnDKN9WfndfGqAuAPw6aqp3J2rfRMMQ8GwjpRU3PhCxJeqdMOAngT2N9RHNoxJ3zZUt5Rzr6g4iiC00OKM8Y9EN"
                token={manejarPagoStripe}
                amount={Math.round(totalFinal * 100)}
                name="Tienda de Vinilos"
                description={`Total Final: $${totalFinal.toFixed(2)}`}
                currency="MXN"
              >
                <button style={styles.stripeButton}>
                  <img
                    src="/s.png"
                    alt="Stripe Logo"
                    style={styles.logo}
                  />
                  Pagar con Stripe
                </button>
              </StripeCheckout>
            </div>
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
    marginTop: '30px',
    borderTop: '1px solid #ddd',
    paddingTop: '20px',
  },
  paymentSection: {
    marginTop: '30px',
    textAlign: 'center',
  },
  paymentTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paymentMethod: {
    marginBottom: '20px',
  },
  stripeButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#635BFF',
    borderRadius: '5px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    gap: '10px',
    textAlign: 'center',
  },
  logo: {
    height: '20px',
  },
  paypalLogo: {
    marginTop: '10px',
  },
  logo: {
    height: '20px',
    marginRight: '10px',
  },
};

export default PurchaseOrder;
