import React from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import '../css/products.css';
import Navigation from './Navigation';
import {Link} from 'react-router-dom';

class Products extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            products: ""
        }
    }

    componentDidMount(){
        axios.get('https://e-ommerce-server.herokuapp.com/products')
        .then((res)=>{
            console.log(res)
            this.setState({products: res.data})
        })  
      }

    

    render(){
        let products =[]
        if(this.state.products.length){
            this.state.products.forEach((product)=>{
                products.push(
                <ProductCard key={ Math.floor(Math.random() * 1000)}
                    name = {product.name}
                    img ={product.img} 
                    description = {product.description}
                    quantity={product.quantity}
                    price = {product.price}
                    addToCart = {this.props.addToCart}
                    > 
                    
                </ProductCard>)
            });

        }
        

        return(
            <div>
                <Navigation user={this.props.user} login={this.props.login} loginFunction = {this.props.loginFunction} />
                <div className="products-partent-container">
                    <h1 className="products-title">Available Products</h1>
                    <div className="products-container">
                        {products}
                    </div>
                </div>

                <div >
                    <footer>

                                <ul className="styleF">
                                    <li> <a href="/">Privacy Policy</a></li>
                                    <li> <a href="/">Terms of Use</a></li>
                                    <li> <a href="/">Sponsers</a></li>
                                    <li><a href="/">Location</a></li>
                                </ul>
                    
                            <p>&copy; 2019 Valiant</p>
                    
                        </footer>
                </div>
            </div>
        )
    }
}

export default Products;