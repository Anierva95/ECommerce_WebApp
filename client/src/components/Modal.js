import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { useStoreContext } from "../utils/GlobalState";
import API from '../utils/API';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {

  const [state, dispatch] = useStoreContext()

function addToWish(id) {
    API.getProduct(id).then(res => dispatch({type: "ADD_TO_WISH", product: res.data}))
}


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" variant="contained" color="secondary" type="button" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
      <h2 id="transition-modal-title">{props.name}</h2>
            <img src="https://picsum.photos/200/300"></img>
      <p id="transition-modal-description">{props.description}</p>
      <h2>${props.price}</h2>
            <Button variant="contained" color="primary">
                Add to Cart
            </Button>
            <Button variant="contained" color="secondary" onClick={() => addToWish(props.id)}>
        Wishlist!
      </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}