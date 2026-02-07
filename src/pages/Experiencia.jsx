import React from 'react';

const Experiencia = () => {
    return (
        <div className="card" style={{ maxWidth: '800px' }}>
            <h2>Mi Experiencia 🎥</h2>
            <p style={{ marginBottom: '2rem' }}>
                Aquí presento mi experiencia desarrollando esta aplicación con React.
            </p>

            <div className="video-container">
                {/* Replace VIDEO_ID with your actual YouTube video ID */}
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Experiencia;
