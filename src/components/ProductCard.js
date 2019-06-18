import React from 'react';
import '../css/login.css';
import '../App.css';


class ProductCard extends React.Component{

    render(){
        return(
            

            <div>
               
               <div className= "product-card">
                   <div className= "product-image">
                  <img src="https://ae01.alicdn.com/kf/HTB1UiXwhv6H8KJjSspmq6z2WXXab/I-just-want-all-the-dogs-shirt-t-shirts-tumblr-quote-T-Shirts-with-sayings-womens.jpg" alt="lehman img"/>
                  </div>
                  
                  <p>{this.props.name} </p>
                   <p>${this.props.price}</p> 
                   <button className="btn">Add To Cart</button>
               
               </div>
       
       
               
             </div>
        )
    }
}

export default ProductCard;