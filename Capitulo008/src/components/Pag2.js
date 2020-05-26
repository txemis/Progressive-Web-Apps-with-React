//crear con "class-bassed component"
// Pag2 == ChatContainer
import React, { Component } from 'react';
import Header from './Header';

export default class Pag2 extends Component
{
    render() {
        return (
            <div id="ChatContainer">
                <Header />
                <h1>Hola desde Página2!</h1>
            </div>
        );
    }
}