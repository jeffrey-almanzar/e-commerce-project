import React from 'react';
import '../css/login.css';
import '../App.css';
import '../css/productCard.css';
import {Link} from 'react-router-dom';


class ProductCard extends React.Component{

    render(){
        return(
            

            <div className= "product-card-parent">
               
               <div className= "product-card">
                   <div className= "product-image">
                  <img src={this.props.img}/>
                  </div>
                  
                  <p id="name">{this.props.name} </p>
                   <p>${this.props.price}</p> 
                   <Link to="/cart"><button className="btn">Add Item To Cart</button></Link>
               
               </div>
       
       
               
             </div>
        )
    }
}

export default ProductCard;