/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import UsuarioInfo from "./components/condicional/UsuarioInfo";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ParOuImpar from "./components/condicional/ParOuImpar";

import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";

import './App.css'

export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            
            <Card titulo="#07 Renderização condicional" color="#421">
                <ParOuImpar numero={22}></ParOuImpar>
                <UsuarioInfo usuario={{nome:'Fernando'}}></UsuarioInfo>
            </Card>

            <Card titulo="#07 Desafio repetição" color="#929">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 Repetição" color="#529">
                <ListaAlunos></ListaAlunos>
            </Card>

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