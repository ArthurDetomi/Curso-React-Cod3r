/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    // Utilizando destructor
    // const [c, d] = [1, 2];
    // const {c, d} = {c:12, d:15};
    const {valueMin, valueMax} = props;


    const numeroAleatorio = parseInt(Math.random() * (valueMax - valueMin) + valueMin);

    return (
        <div>
            <h2>Valor Máximo e Mínimo</h2>
            <p>
                min = {valueMin} e max = {valueMax}
                <br/>
                Numero aletorio = {numeroAleatorio}
            </p>

        </div>
    );
}