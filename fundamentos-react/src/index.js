import ReactDOM from 'react-dom';
import React from 'react';

import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

const tag = <strong>Olá React</strong>;

ReactDOM.render(
    <div id="app" >
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do aluno" 
        aluno="Pedro" nota="9.3"/>
        <Fragmento />
    </div>, 
    document.getElementById('root')
);