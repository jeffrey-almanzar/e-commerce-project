import React from 'react';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Products from './components/Products';
import Cart from './components/Cart';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component{

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/login' component={LogIn} />
          <Route  path='/register' component={Register} />
          <Route  path='/cart' component={Cart} />
          <Route  path='/products' component={Products} />
          
        </Switch>
      </Router>
    )
  }
}

export default App;
