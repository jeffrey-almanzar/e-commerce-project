import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
// import logo from '../images/icon.JPG';

class Thanks extends React.Component{

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

        {/* <div className="image-bottom">
             <p>Duis aute irure dolor in reprehenderit in voluptate 
                         velit esse cillum dolore eu fugiat nulla pariatur. 
                         Excepteur sint occaecat cupidatat non proid.</p> 
        </div> */}





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
        </body>
     
    </div>
  );
}
}
export default Thanks;
