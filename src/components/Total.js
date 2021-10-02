import accounting from 'accounting'
import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { totalCompras } from '../reducer';
import { useStateValue } from '../StateProvider';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh',
        marginTop: "4rem"

    },
    Button: {

        backgroundColor: "#4caf50",
        marginTop: '2rem',
    },

}))

const Total=()=> {
    const estilos = useStyles();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className={estilos.root}>
            <h5> total compras:{basket?.length}</h5>
            <h5>{accounting.formatMoney(totalCompras(basket))}</h5>
            <Button className={estilos.Button} variant="contained" color='primary'>Confirmar</Button>
        </div>
    )
}

export default Total
