import React from 'react';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">

    <Home/>
    <LogIn />
    <Register/>
    <ProductCard name = "Shirt For Women" price="90.99"/>
     
    </div>
  );
}

export default App;
