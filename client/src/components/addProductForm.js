import React, {useRef} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
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
            Gender: genderRef.current.value
        }).then(res => console.log("passed through!!! burkeep"))
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
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label="Item Name"
          variant="filled"
          inputRef={itemRef}
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
      </div>
      </form>
            <button onClick={() => AddItem()}>
                Submit
            </button>
            </div>
  );
}