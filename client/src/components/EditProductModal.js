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
      value: 'T-Shirts',
      label: 'T-Shirts',
    },
    {
      value: 'Sweaters',
      label: 'Sweaters',
    },
    {
      value: 'Hoodies',
      label: 'Hoodies',
    },
    {
      value: 'Pants',
      label: 'Pants',
    },
    {
      value: 'Socks',
      label: 'Socks',
    },
    {
      value: 'Dress Shirts',
      label: 'Dress Shirts',
    },
    {
      value: 'Accessory',
      label: 'Accessory',
    },
    {
      value: 'Dresses',
      label: 'Dresses',
    },
    {
      value: 'Skirts',
      label: 'Skirts',
    },
    {
      value: 'Polo Shirts',
      label: 'Polo Shirts',
    },
    {
      value: 'Suits',
      label: 'Suits',
    },
  ];

  const genders = [
    {
      value: 'Small',
      label: 'Small'
    },
    {
      value: 'Medium',
      label: 'Medium'
    },
    {
      value: 'Large',
      label: 'Large'
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
                  onChange = {e => SetItemName(e.target.value)}
                />
                <FilledInput
                  id="filled-adornment-amount"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  value={priceAmount}
                  onChange = {e => SetPriceAmount(e.target.value)}
                />
                <TextField
                  select
                  label="Type"
                  variant="filled"
                  value={typeItem}
                  onChange= {e => SetItemType(e.target.value)}
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
                  value={descriptionText}
                  onChange = {e => SetDescriptionText(e.target.value)}
                />
                <TextField
                  label="Quantity"
                  variant="filled"
                  value={quantityAmount}
                  onChange= {e => SetQuantityAmount(e.target.value)}
                />
                <TextField
                  select
                  label="Gender"
                  variant="filled"
                  value={genderType}
                  onChange={e => setGenderType(e.target.value)}
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
              <Button variant="contained" color="primary" onClick={() => editItem(props.id)}>
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