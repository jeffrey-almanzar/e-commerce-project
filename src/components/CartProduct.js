import React from 'react';
import '../css/cartProduct.css';

class  CartProduct extends React.Component{

    remove = () =>{
        
        let product={
            name:this.props.name,    
        }
        this.props.removeFromCart(product)
    }

    updateT = (e) =>{
        this.props.updateTotal({ quantity: Number(e.target.value), price: this.props.price, name: this.props.name, img: this.props.img})
        
    }

    render(){

        
    
        return (
            <div className="cart-product-container">
                <div className="product-cart-img-container">
                    <img src={this.props.img} alt="alt" />
                </div>

                <div className="product-cart">
                
                
                <div className="product-cart-header">
                        <p className="product-cart-name">{this.props.name}</p>
                        <div>
                            <label htmlFor="quantity">Quantity</label>
                            <select onChange={this.updateT}>
                                <option value="1" selected>1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                            </select>
                        </div>

                </div>

                <p className="product-cart-price">${this.props.price}</p>
                
                <div className="remove-btn-container">
                        <button onClick={this.remove}>Remove from cart</button>
                </div>

                </div>
            </div>
        )
    }
}

export default CartProduct;