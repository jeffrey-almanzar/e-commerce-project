import React from 'react';
import '../css/login.css';


class LogIn extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            email:"",
            password:""
        }
    }

    emailChange = (event) =>{
        this.setState({email: event.target.value})
    } 

    passwordChange = (event) =>{
        this.setState({password: event.target.value})
    }

    submit = (e) =>{
        e.preventDefault()
        alert("Submit working")
    }

    render(){
        return(
            <div className="login-form-container">
                <form className="login-from" onSubmit={this.submit}>
                    <h1 className="log-in-header">Log In</h1>
                    
                    <div>
                        <p><label>Email</label></p>
                        <input type="email" value={this.state.email} onChange={this.emailChange} />

                        <p><label>Password</label></p>
                        <input type="password" value={this.state.password} onChange={this.passwordChange} />
                        <br />

                        <button type="submit">Log In</button>
                        <button>Create Account</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LogIn;