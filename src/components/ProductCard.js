import React from 'react';
import '../css/login.css';
import '../App.css';
import '../css/productCard.css';
import {Link} from 'react-router-dom';


class ProductCard extends React.Component{

    addToShoopingCard = () =>{
        this.props.addToCart({name: this.props.name, price: this.props.price, img: this.props.img, quantity:1})
    }

   

    render(){
        return(
            

            <div className= "product-card-parent">
               
               <div className= "product-card">
                   <Link to={{ pathname: "/description", state: {
                       name: this.props.name,
                       price: this.props.price,
                       description: this.props.description,
                       img: this.props.img,
                       quantity: 1
                       }}}>
                   
                        <div className= "product-image">
                            <img src={this.props.img} alt="img not available" />
                        </div>
                  </Link>

                  <p id="name">{this.props.name} </p>
                   <p>${this.props.price}</p> 
                   <button onClick={this.addToShoopingCard} className="btn">Add To Cart</button>
               
               </div>
       
       
               
             </div>
        )
    }
}

export default ProductCard;