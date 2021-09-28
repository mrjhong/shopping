import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import { grid, typography } from "@mui/system";
import products from "../dbProductos";
import Producto from "./Producto";
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
                {products.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Producto key={item.id} product={item} />
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
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormRow />
                </Grid>
                <Grid container spacing={3}>
                    <Typography aling='center' gutterBottom variant='h4'>
                        Total
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
export default CheckoutPage;