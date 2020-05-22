import React, { Component } from 'react';
import './app.css';
import Container1 from './Container1';

/*
const App = () => {
    return <h1>Hello from React!!</h1>
};
*/

class App extends Component {
    render(){
        return (
            <div id="container" className="inner-container">
                <Container1 />
            </div>
        );
    }
}

export default App;