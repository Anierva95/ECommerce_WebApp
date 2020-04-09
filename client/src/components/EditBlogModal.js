import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { useStoreContext } from "../utils/GlobalState";
import API from '../utils/API';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormControl } from '@material-ui/core';




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
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    padding: theme.spacing(2, 4, 3),
    width: "500px"
  },
}));

export default function TransitionsModal(props) {


  const [itemName, SetItemName] = useState(props.name);
  const [priceAmount, SetPriceAmount] = useState(props.price);
  const [typeItem, SetItemType] = useState(props.Type);
  const [descriptionText, SetDescriptionText] = useState(props.description);
  const [quantityAmount, SetQuantityAmount] = useState(props.quantity);
  const [genderType, setGenderType] = useState(props.gender);


  const [state, dispatch] = useStoreContext()
  const [imageUploaded, changeStatus] = useState(false)

  let image = "";

  var myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'diadpow6d', 
    uploadPreset: 'h6i1uchv'}, (error, result) => { 
      if (!error && result && result.event === "success") {
        changeStatus(true)
        image = result.info.url;
        console.log(image)
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )

  const Type = [
    {
      value: 'Clothing',
      label: 'Clothing',
    },
    {
      value: 'Stand Up',
      label: 'Stand Up',
    },
    {
      value: 'Relic',
      label: 'Relic',
    },
    {
      value: 'Used Kitchenware',
      label: 'Used Kitchenware',
    },
  ];

  const genders = [
    {
      value: 'Female',
      label: 'Female'
    },
    {
      value: 'Male',
      label: 'Male'
    },
    {
      value: 'Unisex',
      label: 'Unisex'
    }
  ]

  function loadProducts() {
    API.getProducts().then(res => {
      dispatch({
        type: "GET_PRODUCTS",
        products: res.data
      })
    })
    .catch(err => console.log(err));
  };

  function editItem(id) {
    API.updateProduct(id, {
      Item: itemName,
      Type: typeItem,
      Description: descriptionText,
      Price: priceAmount,
      Quantity: quantityAmount,
      Gender: genderType,
      Image: props.Image
    })
    setTimeout(() => {
      loadProducts()
    }, 100);
  }

  function saveCart() {
    API.saveCart(state.currentUser.id, state.shoppingCart).then(res => console.log("saved to cart", res.data)).then(dispatch({
      type: "SET_USER",
      user: {
        ...state.currentUser,
        shoppingCart: state.shoppingCart
      }
    }))
  }


useEffect(() => {
  saveCart();
}, [state.shoppingCart])

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
;

  return (
    <div>
      <Button size="small" variant="contained" color="secondary" type="button" onClick={handleOpen}>
        Edit Blog
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
        <Grid item container direction="column" xs={12}>
        <form className={classes.root} noValidate autoComplete="off" bgcolor="primary.main">
                <h2>Write a blog</h2>
                <FormControl fullWidth>
                  <TextField
                    label="Blog Title"
                    variant="filled"
                    fullWidth={true}
                  />
                  <TextField
                    label="Blog Body"
                    variant="filled"
                    fullWidth={true}
                    InputProps={{
                        className: classes.input2
                      }}
                    multiline
                  />
                </FormControl>
                <Button variant="contained" color="primary" onClick={() => console.log("pvp")}>
                  Submit
              </Button>
              </form>
          </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}