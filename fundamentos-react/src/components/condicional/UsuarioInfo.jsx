/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import If from "./If";

export default props => {
    const usuario = props.usuario || {};

    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <b>{usuario.nome}</b>
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <b>Amigão</b>
            </If>
        </div>
    );
}