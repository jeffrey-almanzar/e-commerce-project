import React from 'react';
import '../css/login.css';
import Navigation from './Navigation';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Register extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            name:"",
            email:"",
            password:"",
            redirect:false
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

        axios.post("https://e-ommerce-server.herokuapp.com/register", {
            name: this.state.name,
            email:this.state.email,
            password: this.state.password
        })
        .then((res)=>{
            this.setState({redirect:true})
        })
        .catch(err =>{
            console.log(err)
            alert("Something went wrong, try again")
        })
        
    }

    render(){
        if(this.state.redirect){
            return <Redirect to="/login" />
        }
        return(
            <div>
        
            <Navigation cartSize={this.props.cartSize} />

            <div className="login-form-container">
                <form className="login-from" onSubmit={this.submit}>
                    <h1 className="log-in-header">Register</h1>
                    
                    <div>
                        <p><label>Name</label></p>
                        <input type="text" value={this.state.name} onChange={this.nameChange} required/>

                        <p><label>Email</label></p>
                        <input type="email" value={this.state.email} onChange={this.emailChange} required />

                        <p><label>Password</label></p>
                        <input type="password" value={this.state.password} onChange={this.passwordChange} required/>
                        <br />

                        <button className="btn" type="submit" >Create Account</button>
                    </div>
                </form>
            </div>




            <div >
                <footer>
                        
                      
                            <ul className="styleF">
                                <li> <a href="/">Privacy Policy</a></li>
                                <li> <a href="/">Terms of Use</a></li>
                                <li> <a href="/">Sponsers</a></li>
                                <li><a href="/">Location</a></li>
                            </ul>
                
                        <p>&copy; 2019 Valiant</p>
                   
                    </footer>
            </div>
            </div>

        )
    }
}

export default Register;