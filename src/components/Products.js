import React from 'react';
import axios from 'axios';

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
        let temporal =[]
        this.state.products.forEach((product)=>{
            temporal.push(<div key={product.key}>
                <h2>{product.name}</h2>
                <img src={product.img} alt="alt text"/>
                <p>{product.description}</p>
                <p>{product.price}</p>

            </div>)
        })
        return(
            <div key={0}>
                <h1>Hello</h1>
                {temporal}
            </div>
        )
    }
}

export default Products;