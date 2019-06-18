import React from 'react';
import '../css/login.css';

class Register extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            name:"",
            email:"",
            password:""
        }
    }

    nameChange = (event) =>{
        this.setState({name: event.target.value})
    }
    emailChange = (event) =>{
        this.setState({email: event.target.value})
    } 

    passwordChange = (event) =>{
        this.setState({password: event.target.value})
    }

    submit = (e) =>{
        e.preventDefault()
        alert("Register working")
    }

    render(){
        return(
            <div className="login-form-container">
                <form className="login-from" onSubmit={this.submit}>
                    <h1 className="log-in-header">Register</h1>
                    
                    <div>
                        <p><label>Name</label></p>
                        <input type="text" value={this.state.name} onChange={this.nameChange} />

                        <p><label>Email</label></p>
                        <input type="email" value={this.state.email} onChange={this.emailChange} />

                        <p><label>Password</label></p>
                        <input type="password" value={this.state.password} onChange={this.passwordChange} />
                        <br />

                        <button type="submit" >Create Account</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;