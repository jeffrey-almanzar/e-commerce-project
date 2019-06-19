import React from 'react';
import '../css/login.css';

class Checkout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            address: "",
            card: "",
            date:"2019-05",
            cvc: ""
        }
    }

    nameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    addressChange = (event) => {
        this.setState({ address: event.target.value })
    }

    cardChange = (event) => {
        this.setState({ card: event.target.value })
    }
    dateChange = (event) => {
        this.setState({ date: event.target.value })
    }
    cvcChange = (event) => {
        this.setState({ cvc: event.target.value })
    }

    submit = (e) => {
        e.preventDefault()
        alert("Register working")
    }

    render() {
        return (


            <div>
                <head>
                    <link rel="stylesheet" type="text/css" href="App.css" />
                    <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet"></link>

                    <link rel="shortcut icon" href="http://www.logo-designer.co/wp-content/uploads/2013/04/V-Management-model-agency-logo-design-branding-identity-graphics-AKU-5.jpg" />
                    <title>Home</title>


                </head>

                <header>
                    <nav className="whole-nav">
                        <div className="navigation-bar">
                            <a href="index.html">
                                <img className="logo" src="http://www.logo-designer.co/wp-content/uploads/2013/04/V-Management-model-agency-logo-design-branding-identity-graphics-AKU-5.jpg"
                                    alt="Main logo" />
                            </a>
                            <ul>
                                <li><a href="index.html" target="">Valiant</a></li>
                                <li><a href="index2.html" target="">Clothing</a></li>
                                <li><a href="index3.html" target="">Shoes</a></li>
                            </ul>
                        </div>

                        <div className="nav-left">
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
                        <h1 className="log-in-header">Checkout</h1>

                        <div>
                            <p><label>Name</label></p>
                            <input type="text" value={this.state.name} onChange={this.nameChange} />

                            <p><label>Address</label></p>
                            <input type="text" value={this.state.address} onChange={this.addressChange} />

                            <p><label>Card Number</label></p>
                            <input type="text" value={this.state.card} onChange={this.cardChange} />
                            <br />

                            {/* <p><label>Expiry Date</label>
                            <input type="month" value={this.state.date} onChange={this.dateChange} />
                            <label>CVC</label>
                            <input type="text" value={this.state.cvc} onChange={this.cvcChange} />
                            </p><br /> */}

                            <label>Expiry Date</label>
                            <input type="month" value={this.state.date} onChange={this.dateChange} />
                            <label>CVC</label>
                            <input type="text" value={this.state.cvc} onChange={this.cvcChange} />
                            


                            <button className="btn" type="submit" >Pay</button>
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

export default Checkout;