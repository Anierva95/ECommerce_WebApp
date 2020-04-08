import React, { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import API from '../utils/API';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'
import { FormControl } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '88ch',
    },
    textAlign: "center",
    boxShadow: "0 0 5px"
  },
}));

export default function AddProductForm() {

  const classes = useStyles();

  const itemRef = useRef();
  const priceRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();
  const quantityRef = useRef();
  const genderRef = useRef();

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

  function AddItem() {
    console.log(itemRef.current.value);
    console.log(priceRef.current.value);
    console.log(typeRef.current.value);
    console.log(descriptionRef.current.value);
    console.log(quantityRef.current.value);
    console.log(genderRef.current.value);
    API.saveProduct({
      Item: itemRef.current.value,
      Type: typeRef.current.value,
      Description: descriptionRef.current.value,
      Price: parseInt(priceRef.current.value),
      Quantity: parseInt(quantityRef.current.value),
      Gender: genderRef.current.value,
      Image: image
    }).then(res => console.log("Product created!! burkeep!"))
  }

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

  return (
    <div>
      <div>
          <Grid item container direction="column" xs={3}>
            <form className={classes.root} noValidate autoComplete="off" bgcolor="primary.main">
              <h2>Sell an item</h2>
              <FormControl fullWidth>
                <TextField
                  label="Item Name"
                  variant="filled"
                  inputRef={itemRef}
                  fullWidth={true}
                />
                <FilledInput
                  id="filled-adornment-amount"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  inputRef={priceRef}
                />
                <TextField
                  id="standard-select-currency"
                  select
                  label="Type"
                  variant="filled"
                  inputRef={typeRef}
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
                  inputRef={descriptionRef}
                />
                <TextField
                  label="Quantity"
                  variant="filled"
                  inputRef={quantityRef}
                />
                <TextField
                  select
                  label="Gender"
                  variant="filled"
                  inputRef={genderRef}
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
              <Button variant="contained" color="primary" onClick={() => AddItem()}>
                Submit
            </Button>
            </form>
          </Grid>
      </div>
    

    </div>
  );
}