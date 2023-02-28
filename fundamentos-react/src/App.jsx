/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default () =>
    <div id="app" >
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro titulo="Situação do aluno"
            aluno="Pedro" nota="9.3" />
        <Primeiro></Primeiro>
    </div>
;