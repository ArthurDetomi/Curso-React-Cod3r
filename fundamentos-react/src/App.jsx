/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./components/layout/Card";

export default () =>
    <div id="app" >
        <h1>Fundamentos React</h1>

        <Card titulo="#04 Exemplo de Card">
            <NumeroAleatorio valueMin="0" valueMax="60" />
        </Card>

        <Card titulo="#03 Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 Com Parametro">
            <ComParametro titulo="Situação do aluno"
                aluno="Pedro" nota="9.3" />
        </Card>

        <Card titulo="#01 Primeiro">
            <Primeiro/>
        </Card>
    </div>
    ;