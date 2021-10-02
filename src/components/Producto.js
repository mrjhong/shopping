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
import { AddShoppingCart } from '@mui/icons-material';
import accounting from "accounting";
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Producto({ miProducto: { id, name, productType, image, price, raiting, descripcion },
}) {
  const [{ basket }, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        productType,
        image,
        price,
        raiting,
        descripcion,
      }
    })
  };

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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={addToBasket}>
          <AddShoppingCart />
        </IconButton>

        <IconButton>
          {Array(raiting)
            .fill()
            .map((_, i) => (<p>&#11088;</p>))}

        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            descripcion del producto
            nombre
            calidad
            año
          </Typography>
          <Typography paragraph>
            ejemplo de producto
          </Typography>
          <Typography paragraph>
            {descripcion}
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
