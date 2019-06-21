import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
// import logo from '../images/icon.JPG';

class Thanks extends React.Component{

 
//  componentDidMount(){
//     this.props.clearCart()
//  }

  render(){
  return (
    <div className="">
    <Navigation user={this.props.user} login={this.props.login} loginFunction = {this.props.loginFunction} />

    <body>
        <div className ="homePic">
            <img src = "https://cdn130.picsart.com/273610805027201.gif"/>
        <div className="image-top">
                <p className= "the-name">Thank You For Your Purchase...</p>

        </div>

        <div className="image-bottom" >
             <p>Give Us Your Money.</p> 
        </div>





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
        </body>
     
    </div>
  );
}
}
export default Thanks;
