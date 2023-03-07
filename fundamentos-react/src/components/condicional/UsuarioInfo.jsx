/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import If from "./If";
import { Else } from "./If";

export default props => {
    const usuario = props.usuario || {};

    return (
        <div>
            {/*
                <If test={usuario && usuario.nome}>
                    Seja bem vindo <b>{usuario.nome}</b>
                    <br/>
                </If>
                <If test={!usuario || !usuario.nome}>
                    Seja bem vindo <b>Amigão</b>
                    <br/>
                </If>
    */}
            <If test={usuario && usuario.nome}>
                Seja bem vindo <b>{usuario.nome}</b>
                <br />
                <Else>
                    Seja bem vindo <b>Amigão</b>
                    <br />
                </Else>
            </If>
        </div>
    );
}