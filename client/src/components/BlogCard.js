import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function deleteBlog (id) {
  console.log(id);
  API.deleteBlogPost(id).then(res => window.location.replace("/blog")) // prob need to call a dispatch to re-render page here, but too lazy atm LOL
}

export default function OutlinedCard(props) {

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography color="textSecondary" variant="h4" gutterBottom>
          {props.Title}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.Body}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Date Published: {props.Date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like!</Button>
        <Button size="small" onClick={() => deleteBlog(props.Key)}>Remove!</Button>
      </CardActions>
    </Card>
  );
}
