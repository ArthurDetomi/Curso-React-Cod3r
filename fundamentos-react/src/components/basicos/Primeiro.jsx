import React from "react";

// Para usar o JSX dentro do componente deve se fazer o import do React
export default function Primeiro() {
    const msg = 'Seja bem vindo!';
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>
                {msg}
            </p>
        </div>
    ); 
}