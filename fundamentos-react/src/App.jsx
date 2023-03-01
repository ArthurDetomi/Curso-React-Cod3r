/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

import './App.css'

export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#05 Componentes com filho" color="#009">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" ></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo"  ></FamiliaMembro>
                    <FamiliaMembro nome="Ana" ></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#04 Desafio Aleatório" color="#080">
                <NumeroAleatorio valueMin="0" valueMax="60" />
            </Card>

            <Card titulo="#03 Fragmento" color="#2e93a1">
                <Fragmento />
            </Card>

            <Card titulo="#02 Com Parametro" color="#c9a2bf">
                <ComParametro titulo="Situação do aluno"
                    aluno="Pedro" nota="9.3" />
            </Card>

            <Card titulo="#01 Primeiro">
                <Primeiro />
            </Card>

        </div>

    </div>
    ;