import './App.css';
import Producto from './components/Producto';
import * as React from 'react';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import CheckoutPage from './components/CheckoutPage';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Tema';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route path="/misCompras">
              <CheckoutPage />
            </Route>

            <Route path="/">
              <Productos />
            </Route>
            
          </Switch>
          
        </div>
      </Router>
    </ThemeProvider>

  );
}

export default App;
