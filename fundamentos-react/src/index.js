import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import Primeiro from './components/basicos/Primeiro';

const tag = <strong>Olá React</strong>;

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
    </div>, 
    document.getElementById('root')
);