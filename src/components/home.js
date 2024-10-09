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
                        <img className="d-block w-100" src="/B.jpg" alt="First slide" style={{ height: '300px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/MLisR.jpg" alt="Second slide" style={{ height: '300px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/GG.jpg" alt="Third slide" style={{ height: '300px', objectFit: 'cover' }} />
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
                            <img src="/B.jpg" className="card-img-top" alt="Producto 1" style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Blur</h5>
                                <p className="card-text">"El álbum homónimo de Blur, lanzado en 1997, presentó un sonido más crudo y experimental, alejándose del Britpop que los había hecho famosos. Incluye su emblemático sencillo 'Song 2', conocido por su energía y su famoso grito 'Woo-hoo!'."</p>
                                <p className="text-primary font-weight-bold">$300.00</p>
                                <button className="btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src="/MLisR.jpg" className="card-img-top" alt="Producto 2" style={{ height: '250px', objectFit: 'cover' }} />
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
                            <img src="/GG.jpg" className="card-img-top" alt="Producto 3" style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Gorillaz</h5>
                                <p className="card-text">Este es el álbum debut de la banda virtual Gorillaz, lanzado en 2001. Mezcla géneros como el hip hop, rock y electrónica, con éxitos como 'Clint Eastwood' y '19-2000'. La banda fue creada por Damon Albarn de Blur y el artista Jamie Hewlett.</p>
                                <p className="text-primary font-weight-bold">$300.00</p>
                                <button className="btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;

