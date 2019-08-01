import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import menu from '../images/menu.png'

class Navigation extends React.Component{

    constructor(props){
        super(props);
        this.menu = React.createRef();
        this.state={
            showMenu:false
        }
    }

    componentDidMount(){
        this.menu.current.style.display ="none";
    }

    onClick = ()=>{
        if(this.state.showMenu){
            this.menu.current.style.display ="none";
            this.setState({showMenu:false})
        }else{
            this.menu.current.style.display ="flex";
            this.setState({showMenu:true})
        }      
    }

    logout = () =>{
        alert("Logging out")
        this.props.loginFunction(false, "")
    }

    render(){
        
        if(this.props.login){
            return(
                <header>
                    <nav className="whole-nav">

                        <div className="navigation-bar">
                            <Link to="/" >
                                <img className="logo" 
                                    src="http://www.logo-designer.co/wp-content/uploads/2013/04/V-Management-model-agency-logo-design-branding-identity-graphics-AKU-5.jpg"
                                    alt="Main logo"/>
                            </Link>

                            <ul>
                                <li><Link to="/" >Valiant</Link></li>
                                <li><Link to="/products" >Items</Link></li>                              
                            </ul>

                        </div>

                        <div className= "nav-left" ref={menu}>
                            <ul>                                   
                                <li className="user-log-in">Hello, {this.props.user.name}</li>
                                <li id="sign-in"  onClick={this.logout} role="button"><Link to="/" >Log out</Link></li>
                                <li id="cart" role="button"><Link to="/cart" ><span className="cart-link">Cart</span><span className="cart-size">{this.props.cartSize}</span><img src="https://cdn.dribbble.com/users/1146750/screenshots/2737669/savr-cart_small.gif" /></Link>
                                </li>                                    
                            </ul>
                        </div>

                        <div className="menu-container"  onClick={this.onClick}>
                            <img src={menu} alt="menu" />
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
                    <div className="nav-logo-container">
                        <ul>
                            <li><Link to="/" >Valiant</Link></li>
                        </ul>
                        <div className="menu-container"  onClick={this.onClick}>
                            <img src={menu} alt="menu" />
                        </div>
                    </div>
                </div>

                <div className= "nav-left"ref={this.menu} >
        
                    <ul >
                        <li><Link to="/products" >Products</Link></li>   
                        <li id="sign-in" role="button"><Link to="/login" >Sign in</Link></li>
                        <li><Link to="/register" >Register</Link></li>
                        <li id="cart" role="button">
                            <Link to="/cart" ><img src="https://cdn.dribbble.com/users/1146750/screenshots/2737669/savr-cart_small.gif" /></Link>
                        </li> 
                    </ul>                  
                </div>

               

            </nav>
        </header>
        )
    }
}

export default Navigation;