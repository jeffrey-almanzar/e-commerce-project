import React from 'react';
import '../css/login.css';
import '../App.css';
import '../css/showProduct.css';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';


class ShowProduct extends React.Component{

    render(){
        return(
            <div>
        <Navigation />
             <div className="showProduct">
                <div className= "show-product-image">
                  <img src={this.props.info.location.state.img}/>
                </div>
             <div className="description">
                  <h1 id="name">{this.props.info.location.state.name} </h1>
                  <h4>Item details</h4>
                  <p id="description">{this.props.info.location.state.description}</p>
                  <br></br>
                  <p id="shipping">Free shipping to United States with $3000 purchase!</p>
                  <h3 id="price">${this.props.info.location.state.price}</h3> 
                  <br></br>
                  <button className="btn">Add To Cart</button>
               
             </div>
       
             </div>     
            </div>
        )
    }
}

export default ShowProduct;