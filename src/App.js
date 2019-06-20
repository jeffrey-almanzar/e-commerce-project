import React from 'react';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Products from './components/Products';
import Cart from './components/Cart';
import ShowProduct from './components/ShowProduct';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      login:false
    }
  }

  userLogIn = (exp) =>{
    this.setState({login: exp})
  }  

  render(){
    const ShowProductComponent = (info) =>{ 
     return (<ShowProduct info={info} />)}

     const LogInComponent = () => <LogIn login={this.state.login} loginFunction = {this.userLogIn} />
     const ProductsComponent = () => <Products login={this.state.login} />

    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/login' component={LogInComponent} />
          <Route  path='/register' component={Register} />
          <Route  path='/cart' component={Cart} />
          <Route  path='/products' component={ProductsComponent} />
          <Route path='/description' component={ShowProductComponent}/>
          
        </Switch>
        
      </Router>
    )
  }
}

export default App;
