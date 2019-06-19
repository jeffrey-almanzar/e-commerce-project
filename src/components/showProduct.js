import React from 'react';
import '../css/login.css';
import '../App.css';


class showProduct extends React.Component{

    render(){
        return(
            <div>
                 <Navigation />
                 <div className= "show-product">
                   <div className= "show-product-image">
                  <img src={this.props.img}/>
                  </div>
                  
                  <p id="name">{this.props.name} </p>
                  <p id="description">{this.props.description}</p>
                   <p>${this.props.price}</p> 
                   <button className="btn">Add Item To Cart</button>
               
               </div>
       
       
                
            
       
       
               
             </div>
        )
    }
}

export default showProduct;