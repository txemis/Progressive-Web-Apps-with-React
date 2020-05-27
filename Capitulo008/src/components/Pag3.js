//crear con "function-bassed component"
import React, { Component } from 'react';
import Header from './Header';

const Pag3 = () => {
    return (
            <div id="ChatContainer">
                <Header />
                <h1>Hola desde Página3!</h1>
            </div>
        );

};

export default Pag3;