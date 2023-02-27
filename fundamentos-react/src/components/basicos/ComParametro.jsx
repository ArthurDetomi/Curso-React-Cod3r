import React from "react";

// Propriedades são somente leitura não é possível altera-las

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado';
    const notaInt = Math.ceil(props.nota);
    return ( 
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong> 
                tem nota 
                <strong> {notaInt} </strong>
                e foi 
                <strong> {status}</strong>
            </p>
        </div>
    );
}