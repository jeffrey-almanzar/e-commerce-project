import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
// import logo from '../images/icon.JPG';

class Home extends React.Component{

  render(){
  return (
    <div className="">
    <Navigation />

    <body>
        <div className ="homePic">
            <img src = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/31/16/istock-639223110-2.jpg"/>
        <div className="image-top">
                <p className= "the-name">Valiant</p>

            <div className ="search-bar">
                <input id ="query-bar" type="text" placeholder="Search for items"/>
                <button className="search-button" type="submit" value="Search" aria-label="Search">
                    Search
                </button>
            </div>

        </div>

        <div className="image-bottom">
                <p>bottom</p>

        </div>





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
export default Home;
