import React, { useState } from 'react';
import { numberToWords } from '../utils/numberToWords';

const Traductor = () => {
    const [number, setNumber] = useState('');
    const [text, setText] = useState('');

    const handleTranslate = () => {
        const num = parseInt(number);
        if (isNaN(num)) {
            setText("Por favor ingrese un número válido");
            return;
        }
        setText(numberToWords(num));
    };

    return (
        <div className="card">
            <h2>Traductor 🗣</h2>
            <p style={{ marginBottom: '1rem', color: '#94a3b8' }}>Convierte números a letras (0-1000)</p>
            <input
                type="number"
                placeholder="Ingrese un número"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                min="0"
                max="1000"
            />
            <button onClick={handleTranslate}>Traducir</button>

            {text && (
                <div className="result" style={{ textTransform: 'capitalize' }}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default Traductor;
