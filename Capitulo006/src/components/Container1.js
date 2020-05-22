import React, { Component } from 'react';

class Container1 extends Component {
    render() {
        //return <h1>Hello from Container1</h1>
        return (
            <div id="LoginContainer" className="inner-container">
                <div id="Header">
                    <img src="/assets/icon.png" alt="logo" />
                    <h1>Sensor de Datos</h1> 
                </div> 
                <form>
                    <p>Rellena para entrar.</p>
                    <input
                        type="text"
                        placeholder="@ tu email" />
                    <input
                        type="password"
                        placeholder="tu password" />
                    <button className="red light" type="submit">Inscribirse</button>
                </form>
            </div>
        );
    }
}

export default Container1;