import React, { useState } from 'react';

const Sumadora = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const handleSum = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        setResult(isNaN(sum) ? 'Error' : sum);
    };

    return (
        <div className="card">
            <h2>Sumadora ➕</h2>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={handleSum}>Sumar</button>

            {result !== null && (
                <div className="result">
                    Resultado: {result}
                </div>
            )}
        </div>
    );
};

export default Sumadora;
