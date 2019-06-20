import React from 'react';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Products from './components/Products';
import Cart from './components/Cart';
import ShowProduct from './components/ShowProduct';
import axios from "axios";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      login:false,
      user: "",
      products:[],
      shoppingCart:[]
    }
  }

  componentDidMount(){
    axios.get('https://e-ommerce-server.herokuapp.com/products')
    .then((res)=>{
        console.log(res)
        this.setState({products: res.data})
    })  
  }

  userLogIn = (exp, user) =>{
    this.setState({login: exp, user:user})
  }  

  addToCart =(product) =>{
    this.setState( (state) =>{
      return state.shoppingCart.push(product)
    })
  }

  render(){
    const ShowProductComponent = (info) =>{ 
     return (<ShowProduct info={info} />)}

     const LogInComponent = () => <LogIn login={this.state.login} loginFunction = {this.userLogIn} />
     const ProductsComponent = () => <Products  addToCart={this.addToCart}   products={this.state.products} user = {this.state.user} loginFunction = {this.userLogIn} login={this.state.login}  />
     const CartComponent = () => <Cart products={this.state.shoppingCart} />
     const HomeComponent = () => <Home user = {this.state.user} loginFunction = {this.userLogIn} login={this.state.login} />
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={HomeComponent } />
          <Route  path='/login' component={LogInComponent} />
          <Route  path='/register' component={Register} />
          <Route  path='/cart' component={CartComponent} />
          <Route  path='/products' component={ProductsComponent} />
          <Route path='/description' component={ShowProductComponent}/>
          
        </Switch>
        
      </Router>
    )
  }
}

export default App;
