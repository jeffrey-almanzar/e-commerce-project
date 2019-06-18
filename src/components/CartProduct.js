import React from 'react';
import '../css/cartProduct.css';

function CartProduct(props){
    return (
        <div className="cart-product-container">
            <div className="product-cart-img-container">
                <img src={props.img} alt="alt" />
            </div>

            <div className="product-cart">
               
               
               <div className="product-cart-header">
                    <p className="product-cart-name">{props.name}</p>
                    <div>
                        <label htmlFor="quantity">Quantity</label>
                        <select>
                            <option value="1" selected>1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                        </select>
                    </div>

               </div>

               <p className="product-cart-price">{props.price}</p>
               
               <div className="remove-btn-container">
                    <button>Remove from cart</button>
               </div>

            </div>
        </div>
    )
}

export default CartProduct;