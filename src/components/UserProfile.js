import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
  const user = {
    name: 'Chris Martinez',
    email: 'pipo69@example.com',
    phone: '123-456-7890',
    address: 'Calle Falsa 123, Ciudad Ficticia, País Imaginario',
    profileImage: '/SF.jpg', 
    orders: []
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md="8">
          <Card className="mt-4 shadow-lg border-light">
            <Card.Header as="h5" className="text-center bg-primary text-white">Perfil de Usuario</Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                <Col md="4" className="text-center">
                  <Image src={user.profileImage} roundedCircle fluid className="border border-secondary" />
                </Col>
                <Col md="8">
                  <Card.Title className="text-primary">{user.name}</Card.Title>
                  <Card.Text>
                    <strong>Email:</strong> {user.email}
                  </Card.Text>
                  <Card.Text>
                    <strong>Teléfono:</strong> {user.phone}
                  </Card.Text>
                  <Card.Text>
                    <strong>Dirección:</strong> {user.address}
                  </Card.Text>
                  <Button variant="primary" onClick={() => alert('Editar perfil')}>Editar Perfil</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col md="8">
          <h4 className="text-center mb-4">Pedidos Recientes</h4>
          {user.orders.length === 0 ? (
            <Card className="mb-3 text-center">
              <Card.Body>
                <Card.Text>No hay pedidos recientes.</Card.Text>
              </Card.Body>
            </Card>
          ) : (
            user.orders.map((order, index) => (
              <Card className="mb-3" key={index}>
                <Card.Header className="bg-light">Pedido #{order.id}</Card.Header>
                <ListGroup className="list-group-flush">
                  <ListGroupItem><strong>Fecha:</strong> {order.date}</ListGroupItem>
                  <ListGroupItem><strong>Total:</strong> ${order.total}</ListGroupItem>
                  <ListGroupItem>
                    <strong>Artículos:</strong>
                    <ul>
                      {order.items.map((item, idx) => (
                        <li key={idx}>{item.name} - ${item.price}</li>
                      ))}
                    </ul>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
