import React from 'react';
import '../css/login.css';
import '../App.css';
import '../css/showProduct.css';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';


class ShowProduct extends React.Component{
    add = () =>{
        let product = {
            name: this.props.info.location.state.name,
            price: this.props.info.location.state.price,
            img:this.props.info.location.state.img
        }

        this.props.addToCart(product)
    }
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
                  <p id="description"> Duis aute irure dolor in reprehenderit in voluptate 
                         velit esse cillum dolore eu fugiat nulla pariatur. 
                         Excepteur sint occaecat cupidatat non proid.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <br></br>
                  <p id="shipping">Free shipping to United States with $3000 purchase!</p>
                  <h3 id="price">${this.props.info.location.state.price}</h3> 
                  <br></br>
                  <button onClick={this.add} className="btn">Add To Cart</button>
               
             </div>
       
             </div>     
            </div>
        )
    }
}

export default ShowProduct;