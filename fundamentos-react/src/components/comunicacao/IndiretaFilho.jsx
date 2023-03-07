/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {

    const callBack = props.quandoClicar;

    return (
        <div>
            <div>
                Filho
            </div>

            <button onClick={
                function (e) {
                    callBack('Joao', 53, true);
                }
            }>
                Fornecer Informações
            </button>
        </div >
    );
}