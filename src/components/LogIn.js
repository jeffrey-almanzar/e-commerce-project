import React from 'react';
import '../css/login.css';
import Navigation from './Navigation';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';


class LogIn extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            email:"",
            password:"",
            redirect:false
        }
    }

    emailChange = (event) =>{
        this.setState({email: event.target.value})
    } 

    passwordChange = (event) =>{
        this.setState({password: event.target.value})
    }

    logInUser = (user) =>{
        this.props.loginFunction(true,user)
    }

    submit = (e) =>{
        e.preventDefault()
        axios.post("https://e-ommerce-server.herokuapp.com/login", {
            email:this.state.email,
            password: this.state.password
        })
        .then((res)=>{
            console.log(res)
            axios.put("https://e-ommerce-server.herokuapp.com/userSignedIn/"+res.data.id)
            if(res.data){
                let user = {
                    name:res.data.name,
                    email:res.data.email,
                    password:res.data.password
                }
                
                localStorage.setItem("name", res.data.name)
                localStorage.setItem("email", res.data.email)
                localStorage.setItem("password", res.data.password)
                this.setState({redirect:true})
            }
            else{
                alert("Either the email or the password is not correct")
            }
           
           
            this.logInUser(res.data)
            
        })
        .catch(err =>{
            console.log(err)
            alert("Either the email or the password is not correct")
        })
        
   
    
    }

    render(){
        if(this.state.redirect){
            return <Redirect to="/products" />
        }
        return(
            <div>
            <Navigation cartSize={this.props.cartSize} />
               

            <div className="login-form-container">

                    <form className="login-from" onSubmit={this.submit}>
                        <h1 className="log-in-header">Log In</h1>
                        
                        <div>
                            <p><label>Email</label></p>
                            <input type="email" value={this.state.email} onChange={this.emailChange} required/>

                            <p><label>Password</label></p>
                            <input type="password" value={this.state.password} onChange={this.passwordChange} required/>
                            <br />

                            <button className="btn" type="submit">Log In</button>
                            <Link to="/register"><button className="btn" >Create Account</button></Link>
                            <p className="demo-user">Demo user: demo@gmail.com   123456</p>
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

export default LogIn;