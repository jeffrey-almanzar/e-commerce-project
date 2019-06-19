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

  render(){
    const ShowProductComponent = () =>{ 
     return (<ShowProduct name="Plaid Shirt" 
                img="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1805910/2018/5/9/890d3187-61dc-40de-ab47-18b521ea9f601525856749699-Roadster-Women-Peach--Purple-Regular-Fit-Checked-Casual-Shirt-7661525856749413-1.jpg" 
                description="Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum." 
                price="999.99"/>)
      }
  


    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/login' component={LogIn} />
          <Route  path='/register' component={Register} />
          <Route  path='/cart' component={Cart} />
          <Route  path='/products' component={Products} />
          <Route path='/description' component={ShowProductComponent}/>
          
        </Switch>
      </Router>
    )
  }
}

export default App;
