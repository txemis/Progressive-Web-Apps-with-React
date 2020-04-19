import React, {Component} from 'react';
import LoginContainer from './LoginContainer';
import './app.css';

class App extends Component {
    render() {
        return (
            <div id="container" className="inner-container">
                <LoginContainer />
            </div>
        );
    }
}


/*
const App = () => {
    return <h1>Hello from React3!!</h1>
};
*/
export default App;
