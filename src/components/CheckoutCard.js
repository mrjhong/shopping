import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@material-ui/core/styles';

import accounting from "accounting";
import Delete from '@mui/icons-material/Delete';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  CardActions: {
   display:"flex !important",
   justifyContent:"space-between !important",
  
  },
  cardRaiting: {
    display:"flex",
  },

}));

export default function CheckoutCard({ miProducto: { id, name, productType, image, price, raiting, descripcion } }
) {
  
  const [{ basket }, dispatch] = useStateValue();

  const [expanded, setExpanded] = React.useState(false);
  const estilos=useStyles(); 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const eliminarItem= () => dispatch({
    type:actionTypes.ELIMINAR_ITEM,
    id
  })

  return (
    <Card sx={{

      marginLeft: 5,
      marginTop: 5,
      maxWidth: 325
    }}>
      <CardHeader

        action={
          <IconButton aria-label="price">
            {accounting.formatMoney(price)}
          </IconButton>
        }
        title={name}
        subheader="disponible"
      />
      <CardMedia
        component="img"
        height="auto"
        image={image}
        alt="Paella dish"
      />

      <CardActions disableSpacing className={estilos.CardActions}> 
      <div className={estilos.cardRaiting}>
    {Array(raiting)
      .fill()
      .map((_, i) => (<p>&#11088; </p>))}
      </div>
      <IconButton onClick={eliminarItem}>
      <DeleteIcon/>
      </IconButton>
      </CardActions>
    </Card>
  );
}
