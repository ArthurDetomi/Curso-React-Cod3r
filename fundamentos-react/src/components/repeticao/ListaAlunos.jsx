/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import alunos from "../../data/Alunos";

export default (props) => {
    // transformando uma lista de objetos em trecho JSX
    const alunosJsx = alunos.map((aluno) => {
        return (
            <li key={aluno.id}> 
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        );
    }); 

    return (
        <div>
            <ul>
                {alunosJsx}
            </ul>
        </div>
    );
}