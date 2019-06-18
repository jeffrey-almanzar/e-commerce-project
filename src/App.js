import React from 'react';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';

function App() {
  return (
    <div className="App">

    <Home/>
    <LogIn />
    <Register/>
     
    </div>
  );
}

export default App;
