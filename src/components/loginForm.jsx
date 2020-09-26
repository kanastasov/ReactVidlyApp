import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';

class LoginForm extends Component {

    state= {
        account: {username: "", password: ""},
        errors: {}
    };
    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    };

    validate = () => {

        const result = Joi.validate(this.state.account,this.schema,
            {abortEarly:false});
        console.log(result);

        const errors = {};
        const { account } = this.state;
        if(account.username.trim() ==='')
            errors.username='Username is requreid.';

        if(account.password.trim() ==='')
            errors.password='Password is requreid.';

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        console.log('erros ', errors);
        this.setState({ errors: errors || {} });
        if(errors) return;
        console.log('Submited');
    }

    validateProperty = ({name, value}) => {
        if(name === 'username') {
            if(value.trim() ==='') return 'Username is required';
        }
        if(name === 'password') {
            if(value.trim() ==='') return 'Password is required';
        }

    }

    handleChange = ({ currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validatePorperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account, errors });
    };
    render() { 

        const { account, errors } = this.state;

        return ( 
        <div>
            <h1>LoginForm</h1>
            <form onSubmit={this.handleSubmit}>
                <Input
                    name="username"
                    value={account.username}
                    label="Username"
                    onChange={this.handleChange}
                    error={errors.username}
                 />
                <Input 
                     name="password"
                     value={account.password}
                     label="Password"
                     onChange={this.handleChange}
                     error={errors.password}
                />

                <button className="btn btn-primary">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;