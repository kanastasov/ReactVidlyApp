import React, { Component } from 'react';

class LoginForm extends Component {
    render() { 
        return ( 
        <div>
            <h1>LoginForm</h1>
            <form >
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input id="username" type="text" className="form-control"/>Username</div>
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