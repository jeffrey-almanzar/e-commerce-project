import React from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import '../css/products.css';

class Products extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            products:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/products')
        .then((res)=>{
            console.log(res)
            this.setState({products: res.data})
        })
    }

    render(){
        let products =[]
        this.state.products.forEach((product)=>{
            products.push(
            <ProductCard key={product.key}
                name = {product.name}
                img ={product.img} 
                description = {product.description}
                price = {product.price}> 
            </ProductCard>)
        });

        return(
            <div className="products-partent-container">
                <h1 className="products-title">Available Products</h1>
                <div className="products-container">
                    {products}
                </div>
            </div>
        )
    }
}

export default Products;