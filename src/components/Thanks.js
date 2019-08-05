import React from 'react';
import '../App.css';
import Navigation from './Navigation';


class Thanks extends React.Component{

  render(){
  return (
    <div className="">
    <Navigation cartSize={this.props.cartSize} user={this.props.user} login={this.props.login} loginFunction = {this.props.loginFunction} />

    <div>
        <div className ="homePic">
            <img src = "https://cdn130.picsart.com/273610805027201.gif" alt="img" />
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
        </div>
     
    </div>
  );
}
}
export default Thanks;
