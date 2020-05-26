import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Container1 from './Container1';
import Pag2 from './Pag2';
import './app.css';

/*
const App = () => {
    return <h1>Hello from React!!</h1>
};
*/

class App extends Component {
    render(){
        return (
            <div id="container">
                <Route exact path="/login"  component={Container1} />
                <Route exact path="/"  component={Pag2} />
            </div>
        );
    }
}

export default App;