/* eslint-disable eqeqeq */
import React from "react";

import './TabelaProduto.css'

/* eslint-disable import/no-anonymous-default-export */
import produtos from "../../data/Produtos";

export default () => {
    const produtosJsx = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toString().replace(".", ",")}</td>
            </tr>
        );
    });

    return (
        <table className="tabelaProduto" border={1}>
            <caption>Lista de Produtos</caption>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço(R$)</th>
                </tr>
            </thead>
            <tbody>
                {produtosJsx}
            </tbody>
        </table>
    );
};