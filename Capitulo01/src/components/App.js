import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginContainer from './LoginContainer';
import ChatContainer from './ChatContainer';
import UserContainer from './UserContainer';
import './app.css';

class App extends Component {
    state = {user: null};

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }else{
                this.props.history.push('/login')
            }
        });

    }

    render() {
        return (
            <div id="container">
                <Route path="/login" component={LoginContainer} />
                <Route exact path="/" component={ChatContainer} />
                <Route path="/users/:id" component={UserContainer} />
            </div>
        );
    }
}


/*
const App = () => {
    return <h1>Hello from React3!!</h1>
};
*/
export default withRouter(App);
