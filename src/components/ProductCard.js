import React from 'react';
import '../css/login.css';
import '../App.css';
import '../css/productCard.css';


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
                   <button className="btn">Add To Cart</button>
               
               </div>
       
       
               
             </div>
        )
    }
}

export default ProductCard;