import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Productos más vendidos</h2>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/B.jpg" alt="First slide" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/MLisR.jpg" alt="Second slide" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/GG.jpg" alt="Third slide" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                    <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
