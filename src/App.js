import './App.css';
import Producto from './components/Producto';
import * as React from 'react';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <div>
    <Navbar/>
  
    <Productos/> 
    {/* <CheckoutPage/>*/}
  
    </div>
  );
}

export default App;
