import React, { useState } from 'react';

const Tabla = () => {
    const [number, setNumber] = useState('');
    const [table, setTable] = useState([]);

    const generateTable = () => {
        const num = parseInt(number);
        if (isNaN(num)) {
            setTable([]);
            return;
        }

        const newTable = [];
        for (let i = 1; i <= 13; i++) {
            newTable.push({ factor: i, result: num * i });
        }
        setTable(newTable);
    };

    return (
        <div className="card">
            <h2>Tabla de Multiplicar ✖</h2>
            <input
                type="number"
                placeholder="Ingrese un número"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={generateTable}>Generar Tabla</button>

            {table.length > 0 && (
                <div className="result" style={{ textAlign: 'left', marginTop: '2rem' }}>
                    <div className="table-container">
                        {table.map((row) => (
                            <div key={row.factor} className="table-row">
                                <span>{number} x {row.factor}</span>
                                <span>=</span>
                                <strong>{row.result}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tabla;
