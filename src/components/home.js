import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="container mt-5">

            <header className="text-center mb-5">
                <h1 className="display-4 font-weight-bold">Bienvenido a nuestra Tienda</h1>
                <p className="lead text-muted">Descubre los productos más vendidos y las mejores ofertas.</p>
            </header>

            <div id="carouselExampleControls" className="carousel slide mb-5" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/BC.jpg" alt="First slide" style={{ height: '300px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/MLIRRR.jpg" alt="Second slide" style={{ height: '300px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/G.jpg" alt="Third slide" style={{ height: '300px', objectFit: 'cover' }} />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Siguiente</span>
                </a>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                    <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                </ol>
            </div>

            <section>
                <h2 className="text-center mb-4">Productos Destacados</h2>
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src="/BC.jpg" className="card-img-top" alt="Producto 1" style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Blur</h5>
                                <p className="card-text">"El álbum homónimo de Blur, lanzado en 1997, presentó un sonido más crudo y experimental, alejándose del Britpop que los había hecho famosos. Incluye 'Song 2', conocido por su energía y su famoso grito 'Woo-hoo!', asi como Beetlebum la mejor canción de la historia."</p>
                                <p className="text-primary font-weight-bold">$300.00</p>
                                <button className="btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src="/MLIRRR.jpg" className="card-img-top" alt="Producto 2" style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Modern Life is Rubbish</h5>
                                <p className="card-text">El segundo álbum de estudio de Blur, lanzado en 1993, marcó el comienzo del sonido Britpop que definiría su carrera. Con influencias del rock británico de los años 60, este álbum es una crítica al estilo de vida moderno. Canciones destacadas incluyen 'Coping' y 'Popscene'.</p>
                                <p className="text-primary font-weight-bold">$200.00</p>
                                <button className="btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src="/G.jpg" className="card-img-top" alt="Producto 3" style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Gorillaz</h5>
                                <p className="card-text">Este es el álbum debut de la banda virtual Gorillaz, lanzado en 2001. Mezcla géneros como el hip hop, rock y electrónica, con éxitos como 'Clint Eastwood' y '5/4'. La banda fue creada por Damon Albarn de Blur y el artista Jamie Hewlett a principios del siglo.</p>
                                <p className="text-primary font-weight-bold">$300.00</p>
                                <button className="btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h2
                        className="text-center mb-4"
                        style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            color: '#D32F2F',
                            padding: '10px 20px',
                            border: '3px solid #D32F2F',
                            borderRadius: '12px',
                            backgroundColor: 'rgba(255, 235, 238, 0.8)',
                        }}
                    >
                        Promociones
                    </h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src="/TTTT.jpg" className="card-img-top" alt="Producto 1" style={{ height: '320px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Tocadiscos Clásico</h5>
                                <p className="card-text">Technics -- Semi-automático</p>
                                <p className="text-primary font-weight-bold">$1500.00</p>
                                <button className="btn btn-primary">30% Descuento</button>
                                <button className="btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src="/CP.jpg" className="card-img-top" alt="Producto 2" style={{ height: '400px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Aprovecha</h5>
                                <p className="card-text">Envio gratis en tu primera compra</p>
                                <button className="btn btn-primary">Usar cupon</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src="/TNAA.jpg" className="card-img-top" alt="Producto 3" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">The new abnormal</h5>
                                <p className="card-text">Lanzado en 2020, 'The New Abnormal' es el sexto álbum de estudio de The Strokes. Ganador del Grammy al Mejor Álbum de Rock, incluye canciones como 'At the Door' y 'Ode to the mets', destacando por su sonido melódico y nostálgico.</p>
                                <p className="text-primary font-weight-bold">$300.00</p>
                                <button className="btn btn-primary">20% Descuento</button>
                                <button className="btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="text-center mb-4">Lo que dicen nuestros clientes</h2>
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <p className="card-text">"Gran calidad de productos y servicio, siempre mi tienda favorita para encontrar vinilos raros."</p>
                                <footer className="blockquote-footer">Juan Pérez</footer>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <p className="card-text">"Me encanta la variedad que tienen, siempre encuentro algo que me gusta. ¡Muy recomendado!"</p>
                                <footer className="blockquote-footer">María García</footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
