import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import Producto from './Producto';
import products from '../dbProductos';
import CheckoutCard from "./CheckoutCard";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
    },
}));

const CheckoutPage = () => {
    const estilos = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                {products.map((miItem) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard key={miItem.id} miProducto={miItem} />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (
        <div className={estilos.root}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography aling='center' gutterBottom variant='h4'>
                        Carrito De Compras
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={7}  container spacing={3}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={5}>
                    <Typography aling='center' gutterBottom variant='h4'>
                        Total
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
export default CheckoutPage;