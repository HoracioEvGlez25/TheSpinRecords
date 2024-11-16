import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating';

function Product({ addToCart, addToWishlist }) { 
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [rating, setRating] = useState(0);

  const reviews = [
    {
      user: "Carlos M.",
      comment: "Excelente calidad de sonido y muy bien empaquetado. Lo recomiendo ampliamente.",
      rating: 5
    },
    {
      user: "Ana R.",
      comment: "El disco llegó en perfectas condiciones y suena genial. La selección de canciones es perfecta.",
      rating: 4
    },
    {
      user: "Jorge L.",
      comment: "Un clásico que nunca decepciona. La calidad del vinilo es muy buena, aunque llegó un poco tarde.",
      rating: 4
    }
  ];

  useEffect(() => {
    
    fetch('/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON.');
        }
        return response.json();
      })
      .then(data => {
        const foundProduct = data.find(p => p.id === parseInt(id));
        setProduct(foundProduct);

        if (foundProduct) {
          
          const recommendations = data.filter(p => p.genre === foundProduct.genre && p.id !== foundProduct.id);
          setRelatedProducts(recommendations);
        }
      })
      .catch(error => console.error('Error al cargar el producto:', error));
  }, [id]);

  if (!product) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <Container className="my-5">
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

      <Row className="mt-5">
        <Col>
          <h2>Reseñas</h2>
          {reviews.map((review, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{review.user}</Card.Title>
                <StarRating rating={review.rating} />
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h4>Te podría interesar</h4>
          <Row>
            {relatedProducts.length > 0 ? (
              relatedProducts.map(related => (
                <Col md="4" key={related.id} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={related.imageUrl} alt={related.title} />
                    <Card.Body>
                      <Card.Title>{related.title}</Card.Title>
                      <Card.Text>
                        <strong>Artista:</strong> {related.artist}
                      </Card.Text>
                      <Card.Text>
                        <strong>Precio:</strong> ${related.price}
                      </Card.Text>
                      <Button 
                        variant="primary" 
                        size="sm" 
                        onClick={() => window.location.href = `/product/${related.id}`}>
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
