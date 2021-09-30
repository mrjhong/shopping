import accounting from 'accounting'
import React from 'react'
import { Button,makeStyles } from '@material-ui/core'

const useStyles= makeStyles((theme)=>({
    root:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'20vh',
        marginTop:"4rem"

    },
Button:{
  
    backgroundColor:"#4caf50",
    marginTop:'2rem',
},

}))

function Total() {
   const estilos= useStyles()
    return (
        <div className={estilos.root}>
            <h5> total compras:3</h5>
            <h5>{accounting.formatMoney(50)}</h5>
            <Button className={estilos.Button} variant="contained" color='primary'>Confirmar</Button>     
        </div>
    )
}

export default Total
