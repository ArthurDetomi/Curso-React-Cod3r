/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Gustavo" {...props} ></FamiliaMembro>
            <FamiliaMembro nome="Ana" sobrenome="Silva"></FamiliaMembro>
        </div>
    );
}