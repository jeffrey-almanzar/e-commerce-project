import React from 'react';
import './App.css';

import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Products from './components/Products';
import Cart from './components/Cart';
import ShowProduct from './components/ShowProduct';
import axios from "axios";
import Thanks from './components/Thanks';
import NotFound from './components/NotFound';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

let User ='' ;
let login = false;

if(localStorage.name){
  login = true;
  User = {
     
      id:1,
      name: localStorage.name,
      email: localStorage.email,
      login: true
  }
}


class App extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      login:login,
      user: User,
      products:[],
      shoppingCart:[]
    }

    this.deletedItem={}
  }

  componentDidMount(){
    axios.get('https://e-ommerce-server.herokuapp.com/products')
    .then((res)=>{
      
        let product =[]
        for(let i=0; i< res.data.length; i++){
          product.push({
            name: res.data[i].product,
            description: res.data[i].description,
            img: res.data[i].img,
            price: res.data[i].price,
            quantity: res.data[i].quantity,
          })
        }
        
        this.setState({products: product})
    }) 
    
    axios.get('https://e-ommerce-server.herokuapp.com/cartProducts/'+this.state.user.name)
        .then((data)=>{
            let product =[]
            for(let i=0; i< data.data.length; i++){
              product.push({
                name: data.data[i].product,
                description: data.data[i].description,
                img: data.data[i].img,
                price: data.data[i].price,
                quantity:  data.data[i].quantity,
              })
            }
            this.setState({ shoppingCart: product})
        })
  }

  userLogIn = (exp, user) =>{
    //this.setState({login: exp, user:user})
    if(!exp){
      this.setState({user:"", login:false, shoppingCart:[]})
      localStorage.clear();

    }else{
      this.setState({login:true, user: user })
      axios.get('https://e-ommerce-server.herokuapp.com/cartProducts/'+this.state.user.name)
        .then((data)=>{
            let product =[]
            for(let i=0; i< data.data.length; i++){
              product.push({
                name: data.data[i].product,
                description: data.data[i].description,
                img: data.data[i].img,
                price: data.data[i].price,
                quantity:  data.data[i].quantity,
              })
            }
            this.setState({ shoppingCart: product})
        })
    }
      
  }  

  addToCart =(product) =>{
    this.setState( (state) =>{
      let notInCart = true;
      state.shoppingCart.forEach((pr)=>{
        if(product.name == pr.name){
          notInCart = false;
        }
      })
      if(notInCart && this.state.login){
        axios.post('https://e-ommerce-server.herokuapp.com/addToCart', {username: this.state.user.name, img: product.img, price:product.price, product: product.name, quantity:product.quantity})
        .then((data)=>{
         
        })
        return { shoppingCart: [...state.shoppingCart ,product]}
      }else{
        alert("Already in cart or you are not logged in.")
      }
      
    })
  }

  removeFromCart = (deleteProduct) =>{
    this.deletedItem = deleteProduct;
    this.setState( (state) =>{
      let newList = state.shoppingCart.filter((product) =>{
        return product.name !== deleteProduct.name;
      })
      return {shoppingCart: newList}
    }) 
  }

  componentDidUpdate(){
    if(this.deletedItem.name){
      axios.delete('https://e-ommerce-server.herokuapp.com/removeItem/'+this.deletedItem.name)
      .then((data)=>{
       
      })
    }
   
  }

  clearCart = () =>{
    this.setState({shoppingCart:[]})
  }

  render(){
    const ShowProductComponent = (info) =>{ 
     return (<ShowProduct info={info} cartSize={this.state.shoppingCart.length} user = {this.state.user} loginFunction = {this.userLogIn} login={this.state.login} addToCart ={this.addToCart} />)}
    const ThanksComponent = () => <Thanks cartSize={this.state.shoppingCart.length} clearCart ={this.clearCart} user = {this.state.user} loginFunction = {this.userLogIn} login={this.state.login} />
     const LogInComponent = () => <LogIn cartSize={this.state.shoppingCart.length} login={this.state.login} loginFunction = {this.userLogIn} />
     const ProductsComponent = () => <Products  cartSize={this.state.shoppingCart.length} addToCart={this.addToCart}   products={this.state.products} user = {this.state.user} loginFunction = {this.userLogIn} login={this.state.login}  />
     const CartComponent = () => <Cart cartSize={this.state.shoppingCart.length} clearCart ={this.clearCart}  products={this.state.shoppingCart} allProducts={this.state.products} user = {this.state.user} loginFunction = {this.userLogIn} login={this.state.login} removeFromCart= {this.removeFromCart} />
     const HomeComponent = () => <Home cartSize={this.state.shoppingCart.length} user = {this.state.user} loginFunction = {this.userLogIn} login={this.state.login} />
     const NotFoundComponent = () => <NotFound cartSize={this.state.shoppingCart.length} user = {this.state.user} loginFunction = {this.userLogIn} login={this.state.login}/>;
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={HomeComponent } />
          <Route exact path='/login' component={LogInComponent} />
          <Route exact path='/register' component={Register} />
          <Route  exact path='/cart' component={CartComponent} />
          <Route  exact path='/products' component={ProductsComponent} />
          <Route exact path='/description' component={ShowProductComponent}/>
          <Route exact path='/thanks' component={ThanksComponent}/>
          <Route exact component={NotFoundComponent} />
          
        </Switch>
        
      </Router>
    )
  }
}

export default App;
