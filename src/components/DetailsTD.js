import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating';

function DetailsTD({ addToCart }) {
  const { id } = useParams(); 
  const [tocadisco, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  
  useEffect(() => {
    fetch('/TD.json')
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch(error => console.error('Error al cargar el producto:', error));
  }, [id]);

  if (!tocadisco) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md="6" className="text-center">
          <Image src={tocadisco.imageUrl} alt={tocadisco.title} className="img-fluid rounded" />
        </Col>
        <Col md="6">
          <Card className="border-0">
            <Card.Body>
              <Card.Title as="h2">{tocadisco.title}</Card.Title>
              <Card.Text>
                <strong>Precio:</strong> ${tocadisco.price}
              </Card.Text>
              <Card.Text>
                <strong>Descripción:</strong> Combina la precisión del tocadiscos manual con la comodidad del automático. Es una buena opción para quienes buscan un equilibrio entre control y facilidad de uso. {tocadisco.description}
              </Card.Text>
              <div className="mt-4">
                <h5>Califica este producto:</h5>
                <StarRating rating={rating} onRatingChange={setRating} />
              </div>
              <div className="mt-3">
                <Button variant="primary" size="sm" onClick={() => alert('Agregar a lista de deseos')}>
                  Agregar a lista de deseos
                </Button>
                <Button variant="primary" size="sm" className="ml-2" onClick={() => addToCart(tocadisco)}>
                  Agregar al Carrito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailsTD;
