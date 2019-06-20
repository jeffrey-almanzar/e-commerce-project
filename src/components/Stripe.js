import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
 
class TakeMoney extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            redirect:false
        }
    }
    
  onToken = (token) => {

    axios.post('https://e-ommerce-server.herokuapp.com/checkout', {stripeToken: token.id, amount:this.props.amount})
    .then((res)=>{
        console.log(res)
        this.setState({redirect:true})
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(token.id)
        
    }

    componentDidMount(){
       
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="thanks" />
        }
        return (
        // ...
        <StripeCheckout
            name="Valiant Checkout"
            token={this.onToken}
            stripeKey="pk_test_ZK7HgTR4MPMvQqVC8hJGFtZ5000PZZ4jDI"
            shippingAddress
            email="testingemail@outlook.com"
            
        />
        )
    }
}

export default TakeMoney;