import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar'; 
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating';

function Product({ addToCart, addToWishlist }) { 
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch(error => console.error('Error al cargar el producto:', error));
  }, [id]);

  if (!product) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <Container className="my-5">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Row className="align-items-center">
        <Col md="6" className="text-center">
          <Image src={product.imageUrl} alt={product.title} className="img-fluid rounded" />
        </Col>
        <Col md="6">
          <Card className="border-0">
            <Card.Body>
              <Card.Title as="h2">{product.title}</Card.Title>
              <Card.Text>
                <strong>Artista:</strong> {product.artist}
              </Card.Text>
              <Card.Text>
                <strong>Precio:</strong> ${product.price}
              </Card.Text>
              <Card.Text>
                <strong>Descripción:</strong> {product.description}
              </Card.Text>
              
              <div className="mt-4">
                <h5>Califica este producto:</h5>
                <StarRating rating={rating} onRatingChange={setRating} />
              </div>

              <div className="mt-3">
                <Button variant="primary" size="sm" onClick={() => addToWishlist(product)}>
                  Agregar a wishlist
                </Button>
                <Button variant="primary" size="sm" onClick={() => addToCart(product)}>
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

export default Product;
