import React from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import '../css/products.css';
import Navigation from './Navigation';
import Loader from 'react-loader-spinner';

class Products extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            products: "",
            isPending: true
        }
    }

    componentDidMount(){
        axios.get('https://e-ommerce-server.herokuapp.com/products')
        .then((res)=>{      
            this.setState({products: res.data, isPending:false})
        })  
      }

    

    render(){
        let products =[]
        if(this.state.products.length && !this.state.isPending){
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

        }else if (this.state.isPending){
            products =(
                <div
                      style={{
                       width: "100%",
                       height: "100",
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center"
                     }}
                    >
                      <Loader type="ThreeDots" color="#ffc7bc" height={100} width={100} />
                </div>

            );
        }
        

        return(
            <div>
                <Navigation cartSize={this.props.cartSize} user={this.props.user} login={this.props.login} loginFunction = {this.props.loginFunction} />
                <div className="products-partent-container">
                    <h1 className="products-title">Available Products</h1>
                    <div className="products-container">
                        {products}
                    </div>
                </div>

                
            </div>
        )
    }
}

export default Products;