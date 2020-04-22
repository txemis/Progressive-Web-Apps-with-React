import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

export default class UserContainer extends Component {
    render() {
        return (
            <div id="UserContainer">
            <Header>
                <Link to="/">
                    <button className="red">
                        Back To Chat
                    </button>
                 </Link>
            </Header>
            <h1>Hello from UserContainer for User {this.props.match.params.id} </h1>
            </div>
        );
    }
}