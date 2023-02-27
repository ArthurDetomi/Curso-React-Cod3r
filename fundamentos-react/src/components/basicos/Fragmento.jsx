import React from "react";

export default function Fragmento(props) {
    // com React.Fragment no componente ele não é renderizado como se não estivesse nada envolvido
    return (
        <React.Fragment key="1">
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    );
}