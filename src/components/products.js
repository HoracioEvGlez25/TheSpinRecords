import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Image, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating';

function Product({ addToCart, addToWishlist }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([
    {
      user: "Carlos M.",
      comment: "Excelente calidad de sonido y muy bien empaquetado. Lo recomiendo ampliamente.",
      rating: 5,
    },
    {
      user: "Ana R.",
      comment: "El disco llegó en perfectas condiciones y suena genial. La selección de canciones es perfecta.",
      rating: 5,
    },
    {
      user: "Jorge L.",
      comment: "Un clásico que nunca decepciona. La calidad del vinilo es muy buena, aunque llegó un poco tarde.",
      rating: 4,
    },
  ]);

  const [newReview, setNewReview] = useState({ user: '', comment: '', rating: 0 });

  useEffect(() => {
    fetch('/products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON.');
        }
        return response.json();
      })
      .then((data) => {
        const foundProduct = data.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);

        if (foundProduct) {
          const recommendations = data.filter(
            (p) => p.genre === foundProduct.genre && p.id !== foundProduct.id
          );
          setRelatedProducts(recommendations);
        }
      })
      .catch((error) => console.error('Error al cargar el producto:', error));
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.user && newReview.comment && newReview.rating > 0) {
      setReviews([...reviews, newReview]);
      setNewReview({ user: '', comment: '', rating: 0 });
    } else {
      alert('Por favor completa todos los campos y selecciona una calificación.');
    }
  };

  if (!product) {
    return <div className="text-center mt-5">Cargando detalles del producto...</div>;
  }

  return (
    <Container className="my-5" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Row className="align-items-center">
        <Col md="6" className="text-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col md="6">
          <Card className="border-0" style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title as="h2" style={{ fontWeight: 'bold', color: '#343a40' }}>{product.title}</Card.Title>
              <Card.Text>
                <strong>Artista:</strong> {product.artist}
              </Card.Text>
              <Card.Text>
                <strong>Precio:</strong> <span style={{ fontSize: '1.25rem', color: '#28a745' }}>${product.price}</span>
              </Card.Text>
              <Card.Text>
                <strong>Descripción:</strong> {product.description}
              </Card.Text>
              <div className="mt-4">
                <h5>Califica este producto:</h5>
                <StarRating rating={rating} onRatingChange={setRating} />
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <Button
                  variant="outline-primary"
                  size="sm"
                  style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                  onClick={() => addToWishlist(product)}
                >
                  Agregar a wishlist
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                  onClick={() => addToCart(product)}
                >
                  Agregar al Carrito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 style={{ fontWeight: 'bold', color: '#343a40' }}>Reseñas</h2>
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="mb-3"
              style={{ borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#007bff' }}>{review.user}</Card.Title>
                <StarRating rating={review.rating} readOnly />
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
            </Card>
          ))}

          <h4 style={{ fontWeight: 'bold', color: '#343a40', marginTop: '20px' }}>Deja tu reseña</h4>
          <Form onSubmit={handleReviewSubmit}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={newReview.user}
                onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Comentario</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escribe tu comentario"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Calificación</Form.Label>
              <StarRating
                rating={newReview.rating}
                onRatingChange={(stars) => setNewReview({ ...newReview, rating: stars })}
              />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              className="mt-2"
              style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
            >
              Enviar Reseña
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h4 style={{ fontWeight: 'bold', color: '#343a40' }}>Te podría interesar</h4>
          <Row>
            {relatedProducts.length > 0 ? (
              relatedProducts.map((related) => (
                <Col md="4" key={related.id} className="mb-4">
                  <Card
                    style={{
                      borderRadius: '10px',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={related.imageUrl}
                      alt={related.title}
                      style={{ borderRadius: '10px 10px 0 0', objectFit: 'cover', maxHeight: '200px' }}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: 'bold', color: '#343a40' }}>{related.title}</Card.Title>
                      <Card.Text>
                        <strong>Artista:</strong> {related.artist}
                      </Card.Text>
                      <Card.Text>
                        <strong>Precio:</strong> ${related.price}
                      </Card.Text>
                      <Button
                        variant="primary"
                        size="sm"
                        style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => window.location.href = `/product/${related.id}`}
                      >
                        Ver detalles
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No hay productos relacionados disponibles.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
