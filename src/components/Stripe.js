import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
 
class TakeMoney extends React.Component {
    
  onToken = (token) => {

    axios.post('http://localhost:3000/checkout', {stripeToken: token.id, amount:this.props.amount})
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(token.id)
        
    }

    componentDidMount(){
       
    }

    render() {
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