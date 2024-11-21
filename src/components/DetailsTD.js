import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Image, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating';

function DetailsTD({ addToCart }) {
  const { id } = useParams();
  const [tocadisco, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([
    {
      name: 'Juan Pérez',
      comment: '¡Excelente producto! El sonido es impresionante y se siente muy sólido.',
      stars: 5,
    },
    {
      name: 'María Gómez',
      comment: 'Buen tocadiscos, pero el envío tardó un poco. Aún así, estoy satisfecha.',
      stars: 4,
    },
  ]);
  const [newComment, setNewComment] = useState({ name: '', comment: '', stars: 0 });

  useEffect(() => {
    fetch('/TD.json')
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch((error) => console.error('Error al cargar el producto:', error));
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.comment && newComment.stars > 0) {
      setComments([...comments, newComment]);
      setNewComment({ name: '', comment: '', stars: 0 });
    } else {
      alert('Por favor completa todos los campos y selecciona una calificación.');
    }
  };

  if (!tocadisco) {
    return <div className="text-center mt-5">Cargando detalles del producto...</div>;
  }

  return (
    <Container
      className="my-5 p-4"
      style={{
        background: 'linear-gradient(135deg, #ffffff, #f7f9fc)',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Row className="align-items-center">
        <Col md="6" className="text-center">
          <Image
            src={tocadisco.imageUrl}
            alt={tocadisco.title}
            className="img-fluid rounded"
            style={{
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
              border: '3px solid #e9ecef',
              borderRadius: '15px',
            }}
          />
        </Col>
        <Col md="6">
          <Card
            className="border-0"
            style={{
              backgroundColor: '#fdfdfd',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '20px',
            }}
          >
            <Card.Body>
              <Card.Title
                as="h2"
                style={{ fontWeight: 'bold', color: '#343a40', marginBottom: '15px' }}
              >
                {tocadisco.title}
              </Card.Title>
              <Card.Text style={{ fontSize: '1.2rem', color: '#6c757d' }}>
                <strong>Precio:</strong>{' '}
                <span style={{ fontWeight: 'bold', color: '#28a745' }}>${tocadisco.price}</span>
              </Card.Text>
              <div className="mt-4">
                <h5 style={{ fontWeight: 'bold', color: '#495057' }}>Califica este producto:</h5>
                <StarRating rating={rating} onRatingChange={setRating} />
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <Button
                  variant="outline-secondary"
                  style={{
                    borderRadius: '20px',
                    fontWeight: '500',
                    padding: '10px 20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                  onClick={() => alert('Agregar a lista de deseos')}
                >
                  Lista de deseos
                </Button>
                <Button
                  variant="success"
                  style={{
                    borderRadius: '20px',
                    fontWeight: '500',
                    padding: '10px 20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                  onClick={() => addToCart(tocadisco)}
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
          <h3 style={{ fontWeight: 'bold', color: '#343a40' }}>Comentarios de los clientes</h3>
          <div className="mb-4">
            {comments.map((comment, index) => (
              <Card
                key={index}
                className="mb-3"
                style={{
                  background: '#f8f9fa',
                  borderRadius: '15px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  padding: '15px',
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold', color: '#007bff' }}>
                    {comment.name}
                  </Card.Title>
                  <StarRating rating={comment.stars} readOnly />
                  <Card.Text style={{ fontSize: '1rem', color: '#495057' }}>
                    {comment.comment}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
          <h4 style={{ fontWeight: 'bold', color: '#495057' }}>Deja tu comentario</h4>
          <Form onSubmit={handleCommentSubmit}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={newComment.name}
                onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                style={{
                  borderRadius: '10px',
                  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
                  padding: '10px',
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Comentario</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escribe tu comentario"
                value={newComment.comment}
                onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                style={{
                  borderRadius: '10px',
                  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
                  padding: '10px',
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Calificación</Form.Label>
              <StarRating
                rating={newComment.stars}
                onRatingChange={(stars) => setNewComment({ ...newComment, stars })}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mt-2"
              style={{
                borderRadius: '20px',
                fontWeight: '500',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '10px 20px',
              }}
            >
              Enviar Comentario
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailsTD;
