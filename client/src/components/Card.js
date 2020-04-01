import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from './Modal';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "40px",
    marginBottom: "40px"
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/200/300"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Add to Cart
        </Button>
        <Modal
        name={props.name}
        description={props.description}
        price={props.price}
        />
      </CardActions>
    </Card>
  );
}
