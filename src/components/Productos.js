/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Producto from './Producto';
import products from '../dbProductos';
  // eslint-disable-next-line no-unused-vars
const item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Productos() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      
     
      
      
      <Grid container spacing={1} >
     
      {
        products.map (miProducto=>(
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Producto key={Producto.id} miProducto={miProducto}/>
        </Grid>
      ))
      }
      </Grid>
    </Box>
  );
}
