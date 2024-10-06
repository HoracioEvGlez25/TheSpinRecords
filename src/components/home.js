import React from 'react';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
            <img src={`${process.env.PUBLIC_URL}/LogoSpinRecords.png`} alt="Logo Spin Records" 
            style={{ width: '300px', height: 'auto' }}/>
            <p></p>
            <h1>Bienvenido a Spin Records</h1>
            <p>Encuentra los mejores discos de vinilo de todos los géneros.</p>
            <p></p>
            </header>
        </div>
    );
}

export default Home;