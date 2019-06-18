import React from 'react';
import '../App.css';
// import logo from '../images/icon.JPG';

class Home extends React.Component{

  render(){
  return (
    <div className="">
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

    <body>
        <div className ="homePic">
            <img src = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/31/16/istock-639223110-2.jpg"/>
        <div className="image-top">
                <p>Valiant</p>

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
        </body>
     
    </div>
  );
}
}
export default Home;
