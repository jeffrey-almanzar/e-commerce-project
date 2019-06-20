import React from 'react';
import axios from 'axios';
import CartProduct from './CartProduct';
import TakeMoney from './Stripe';
import Navigation from './Navigation';

class Cart extends React.Component{

    constructor(props){
        super(props)

        

        this.state ={
            products:this.props.products,
            total:0
        }
    }

    componentDidMount(){
        // axios.get('https://e-ommerce-server.herokuapp.com/products')
        // .then((res)=>{
        //     console.log(res)
        //     let total = 0;
        //     res.data.forEach((product)=>{
        //        total+= Number(product.price)
        //     })
        //     this.setState({products: res.data, total:total.toFixed(2)})
        // })
        if(this.state.products){
            let total =0;
            this.state.products.forEach((product)=>{
                console.log(product.quantity)
                total+= (product.price * product.quantity);
            })

            this.setState({total:total})

            
            
        }
       

       
    }

    updateTotal = (product) =>{
        // let options = document.getElementsByTagName("OPTION");
        // console.log(options)
        // for(let i =0; i<options.length; i++){
        //     if(options[i].selected){
        //         console.log(`Value: ${options[i].value}`)
        //     }
            
        // }
        this.setState((state)=>{
            for(let i=0; i<state.products.length; i++){
                if(state.products[i].name == product.name){
                   
                    state.products[i] = product;
                    break;
                }
            }

            let total = 0;
            for(let i=0; i<state.products.length; i++){
                total+= (state.products[i].price * state.products[i].quantity);
            }

            return {products : [...state.products], total}
        })
       
        console.log(product)
    }

    getProducts = () =>{
        let temporal = [];
        
        this.state.products.forEach((product)=>{
            temporal.push(<CartProduct updateTotal={this.updateTotal} removeFromCart= {this.props.removeFromCart} img={product.img} name={product.name} price={product.price} />)
            
        })

        

        return temporal;
      
    }

    render(){
        if(!this.state.products.length){
            return(
             <div>
                <Navigation />
                <h1 className="cart-container-title">Shopping Cart</h1>
                <h3 className="cart-info">There are no products in your shopping cart yet.</h3>
            </div>
            )
        }
        
        return(
            <div>
                
                <Navigation />
                <div className="cart-container">
                    <h1 className="cart-container-title">Shopping Cart</h1>
                    <div>{this.getProducts()}</div>

                    <div className="total-container">
                        <p><span>Total: </span> <span className="product-cart-price">{`$${this.state.total.toFixed(2)}`}</span></p>
                        <TakeMoney amount={this.state.total*100}/>
                    </div>
                </div>
            </div>
        )
    }


}

export default Cart;