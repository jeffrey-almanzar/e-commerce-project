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


            <div>
            <head>
           <link rel="stylesheet" type="text/css" href="App.css"/>
           <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet"></link>
           
           <link rel="shortcut icon" href="http://www.logo-designer.co/wp-content/uploads/2013/04/V-Management-model-agency-logo-design-branding-identity-graphics-AKU-5.jpg" />
           <title>Home</title>
       

</head>

<header>
   <nav className="whole-nav">
   <div className="navigation-bar">
       <a href="index.html">
           <img className="logo" src="http://www.logo-designer.co/wp-content/uploads/2013/04/V-Management-model-agency-logo-design-branding-identity-graphics-AKU-5.jpg"
               alt="Main logo"/>
       </a>
       <ul>
           <li><a href="index.html" target="">Valiant</a></li>
           <li><a href="index2.html" target="">Clothing</a></li>
           <li><a href="index3.html" target="">Shoes</a></li>
       </ul>
       </div>

       <div className= "nav-left">
           <ul>
               <li> <a id="sign-in" href="" role="button">Sign in</a></li>
               <li><a id="sign-in" href="" role="button">Register</a></li>
               <li> <a id="cart" href="" role="button" ><img src="https://cdn.dribbble.com/users/1146750/screenshots/2737669/savr-cart_small.gif" /></a>
               </li> 
          </ul>

       </div>



   </nav>


           </header>



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

                        <button className="btn" type="submit" >Create Account</button>
                    </div>
                </form>
            </div>




            <div >
                <footer>
                        
                      
                            <ul className="styleF">
                                <li> <a href="index4.html">Privacy Policy</a></li>
                                <li> <a href="index4.html">Terms of Use</a></li>
                                <li> <a href="index4.html">Sponsers</a></li>
                                <li><a href="index4.html">Location</a></li>
                            </ul>
                
                        <p>&copy; 2019 Valiant</p>
                   
                    </footer>
            </div>
            </div>

        )
    }
}

export default Register;