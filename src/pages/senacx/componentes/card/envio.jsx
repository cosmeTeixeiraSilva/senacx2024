// src/App.js
import React, { useState } from 'react';

function App() {
    const [variable1, setVariable1] = useState('');
    const [variable2, setVariable2] = useState('');
    const [variable3, setVariable3] = useState('');
    const [variable4, setVariable4] = useState('');

    const votar = async () => {
        try {
            const response = await fetch('http://localhost:5000/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    };

    return (
        <div>
            <h1>Enviar Variables</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Variable 1"
                    value={variable1}
                    onChange={(e) => setVariable1(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Variable 2"
                    value={variable2}
                    onChange={(e) => setVariable2(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Variable 3"
                    value={variable3}
                    onChange={(e) => setVariable3(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Variable 4"
                    value={variable4}
                    onChange={(e) => setVariable4(e.target.value)}
                    required
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}


