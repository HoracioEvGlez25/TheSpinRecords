import React, { useState } from 'react';

function UserProfile() {
    const [name, setName] = useState('Pablito Clavado');
    const [email, setEmail] = useState('Pipo69@example.com');
    const [address, setAddress] = useState('Calle Pedo 123');
    const [phone, setPhone] = useState('123-456-7890'); 
    const [password, setPassword] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        // actualizar la información
        alert('Información actualizada');
    };

    return (
        <div className="user-profile">
            <h2>Perfil de Usuario</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Correo:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Dirección de Envío:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <label>Teléfono:</label> 
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Cambiar Contraseña:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Actualizar Información</button>
            </form>
        </div>
    );
}

export default UserProfile;
