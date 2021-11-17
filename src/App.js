import './App.css';
import * as React from 'react';
import Login from './components/login/Login3';

import RegisterPage from './components/RegisterPage';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import CheckoutPage from './components/CheckoutPage';
import Inicio from './components/Inicio';
import Dashboard from './deshboard/Dashboard';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Tema';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Perfil from './components/Perfil';
import Footer from './components/Footer';
import Nav from './components/Nav';
import FormularioReservar from './components/FormularioReservar';
import BuscarBarbero from './components/BuscarBarbero';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />
          {/* <Nav /> */}
          
          

          <Switch>

            <Route path="/miPerfil">
              <Dashboard/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/Register">
              <RegisterPage/>
            </Route>
            <Route path="/misCompras">
              <CheckoutPage />
            </Route>

            <Route path="/Productos">
              <Productos />
            </Route>

            <Route path="/Perfil">
              <Perfil />
            </Route>

            <Route path="/FormularioReservas">
              <FormularioReservar />
            </Route>

            <Route path="/BuscarBarbero">
              <BuscarBarbero />
            </Route>

            <Route path="/">
              <Inicio />
            </Route>

            
            
          </Switch>

          <Footer/>
          
        </div>

        
        
      </Router>
    </ThemeProvider>

  );
}

export default App;
