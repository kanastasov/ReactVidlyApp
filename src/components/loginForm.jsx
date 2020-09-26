import React, { Component } from 'react';

class LoginForm extends Component {

    state= {
        account: {username: '', password: ''}
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Submited');
    }
    handleChange = (e) => {
        const account = {...this.state.account};
        account.username = e.currentTarget.value;
        this.setState({ account });
    };
    render() { 
        return ( 
        <div>
            <h1>LoginForm</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input 
                      value={this.state.account.username}
                      onChange={this.handleChange}
                      id="username" type="text"
                      className="form-control"/>
                      Username
                      </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input id="password" type="text" className="form-control"/>Password
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;