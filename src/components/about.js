import React from 'react';

function About() {
    return (
        <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <header className="App-header" style={{ maxWidth: '600px', padding: '20px' }}>
                <img src={`${process.env.PUBLIC_URL}/LogoSpinRecords.png`} alt="Logo Spin Records" 
                style={{ width: '250px', height: 'auto', marginBottom: '20px' }}/>
                
                <h1 style={{ fontSize: '1.8em', margin: '10px 0' }}>Bienvenido a Spin Records</h1>
                
                <p style={{ fontSize: '0.8em', lineHeight: '1.5em', margin: '15px 0' }}>
                    Fundamos Spin Records en 2024 con la misión de ofrecer una experiencia única para los amantes de la música y los vinilos.
                </p>
                <p style={{ fontSize: '0.8em', lineHeight: '1.5em', margin: '15px 0' }}>
                    En Spin Records, nos dedicamos a seleccionar cuidadosamente una colección diversa de discos de vinilo principalmente efocada en todos los subgeneros del rock.
                </p>
                <p style={{ fontSize: '0.8em', lineHeight: '1.5em', margin: '15px 0' }}>
                    Visítanos y sumérgete en el sonido auténtico y la calidad excepcional que solo el vinilo puede ofrecer.
                </p>
            </header>
        </div>
    );
}

export default About;
