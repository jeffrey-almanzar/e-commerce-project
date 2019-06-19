import React from 'react';
import axios from 'axios';
import CartProduct from './CartProduct';
import TakeMoney from './Stripe';
import Navigation from './Navigation';

class Cart extends React.Component{

    constructor(props){
        super(props)

        

        this.state ={
            products:[],
            total:0
        }
    }

    componentDidMount(){
        axios.get('https://e-ommerce-server.herokuapp.com/products')
        .then((res)=>{
            console.log(res)
            let total = 0;
            res.data.forEach((product)=>{
               total+= Number(product.price)
            })
            this.setState({products: res.data, total:total})
        })

       
    }

    getProducts = () =>{
        let temporal = [];
        this.state.products.forEach((product)=>{
            temporal.push(<CartProduct img={product.img} name={product.name} price={product.price} />)
        })

        return temporal;
      
    }

    render(){
        if(!this.state.products.length){
            return <h2>There are not products in your shopping bag yet</h2>
        }
        
        return(
            <div>
                
                <Navigation />
                <div className="cart-container">
                    <h1 className="cart-container-title">Shopping Cart</h1>
                    <div>{this.getProducts()}</div>

                    <div className="total-container">
                        <p><span>Total: </span> <span className="product-cart-price">{`${this.state.total}$`}</span></p>
                        <TakeMoney amount={this.state.total*100}/>
                    </div>
                </div>
            </div>
        )
    }


}

export default Cart;