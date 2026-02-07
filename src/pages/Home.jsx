import React from 'react';

const Home = () => {
    return (
        <div className="card">
            <div style={{ textAlign: 'center' }}>
                <img
                    src="/photo.jpeg"
                    alt="Profile"
                    className="profile-img"
                />
                <h2>Mi Perfil</h2>
                <div style={{ textAlign: 'left', marginTop: '2rem' }}>
                    <p><strong>Nombre:</strong> Juan Emil</p>
                    <p><strong>Apellido:</strong> Echavarri Ciprian</p>
                    <p><strong>Matrícula:</strong> 2024-0174</p>
                    <p><strong>Correo:</strong> emilechavarria2005@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
