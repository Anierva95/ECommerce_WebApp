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
  const [priceAmount, SetPriceAmount] = useState(0);
  const [typeItem, SetItemType] = useState("");
  const [descriptionText, SetDescriptionText] = useState("");
  const [quantityAmount, SetQuantityAmount] = useState("");
  const [setGender, setGenderType] = useState("");


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

  function saveCart() {
    // console.log(state.currentUser.id);
    // console.log(state.shoppingCart)
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
        Edit Product
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
              <h2>Edit Product #{props.id}</h2>
              <FormControl fullWidth>
                <TextField
                  label="Item Name"
                  variant="filled"
                  fullWidth={true}
                  value={itemName}
                  onChange= {e => SetItemName(e.target.value)}
                />
                <FilledInput
                  id="filled-adornment-amount"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  value={props.price}
                />
                <TextField
                  id="standard-select-currency"
                  select
                  label="Type"
                  variant="filled"
                  value={props.Type}
                >
                  {Type.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  label="Item Description"
                  variant="filled"
                  value={props.description}
                />
                <TextField
                  label="Quantity"
                  variant="filled"
                  value={props.quantity}
                />
                <TextField
                  select
                  label="Gender"
                  variant="filled"
                  value={props.gender}
                >
                  {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Button id="upload_widget" class="cloudinary-button" onClick={()=> {myWidget.open()}}>Upload Image</Button>
                    {imageUploaded === false ? <p>Please upload an image</p> : <p>Image uploaded!</p>}

              </FormControl>
              <Button variant="contained" color="primary" onClick={() => console.log(props.id)}>
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