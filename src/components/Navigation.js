import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Navigation extends React.Component{

    logout = () =>{
        alert("Logging out")
        this.props.loginFunction(false, "")
    }

    render(){
        console.log(this.props.cartSize)
        if(this.props.login){
            return(
                <header>
                    <nav className="whole-nav">
                        <div className="navigation-bar">
                            <Link to="/" >
                                <img className="logo" src="http://www.logo-designer.co/wp-content/uploads/2013/04/V-Management-model-agency-logo-design-branding-identity-graphics-AKU-5.jpg"
                                    alt="Main logo"/>
                            </Link>
                            <ul>
                                <li><Link to="/" >Valiant</Link></li>
                                <li><Link to="/products" >Items</Link></li>
                                
                            </ul>
                        </div>

                        <div className= "nav-left">
                                <ul>
                                   
                                    <li className="user-log-in">Hello, {this.props.user.name}</li>
                                    <li id="sign-in"  onClick={this.logout} role="button"><Link to="/" >Log out</Link></li>
                                    <li id="cart" role="button"><Link to="/cart" ><span className="cart-link">Cart</span><span className="cart-size">{this.props.cartSize}</span><img src="https://cdn.dribbble.com/users/1146750/screenshots/2737669/savr-cart_small.gif" /></Link>
                                    </li> 
                                    
                                </ul>

                        </div>

                    </nav>
            </header>
            )

        }


        return(
            
        <header>
            <nav className="whole-nav">
                <div className="navigation-bar">
                    <Link to="/" >
                        <img className="logo" src="http://www.logo-designer.co/wp-content/uploads/2013/04/V-Management-model-agency-logo-design-branding-identity-graphics-AKU-5.jpg"
                            alt="Main logo"/>
                    </Link>
                    <ul>
                        <li><Link to="/" >Valiant</Link></li>
                        <li><Link to="/products" >Items</Link></li>
                        
                    </ul>
                    </div>

                    <div className= "nav-left">
                        <ul>
                            <li id="sign-in" role="button"><Link to="/login" >Sign in</Link></li>
                            <li><Link to="/register" >Register</Link></li>
                            <li id="cart" role="button"><Link to="/cart" ><img src="https://cdn.dribbble.com/users/1146750/screenshots/2737669/savr-cart_small.gif" /></Link>
                            </li> 
                    </ul>

                    </div>

            </nav>
        </header>
        )
    }
}

export default Navigation;