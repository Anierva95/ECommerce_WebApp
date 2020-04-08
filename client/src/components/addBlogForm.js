import React, { useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'
import { FormControl } from '@material-ui/core';
const moment = require('moment');

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '88ch',
      },
      textAlign: "center",
      boxShadow: "0 0 5px"
    },
    input2: {
        height: 325,
      }
  }));
  
  export default function AddProductForm() {
  
    const classes = useStyles();
  
    const titleRef = useRef();
    const bodyRef = useRef();

  
    function AddBlog() {
      console.log(titleRef.current.value);
      console.log(bodyRef.current.value);
      API.saveBlogPost({
        Title: titleRef.current.value,
        Body: bodyRef.current.value,
        Date: moment().format('MMMM Do YYYY, h:mm:ss a')
      }).then(res => console.log("Blog created!! burkeep!"))
    }
  
      return (
      <div>
        <div>
            <Grid container direction="column" xs={3}>
              <form className={classes.root} noValidate autoComplete="off" bgcolor="primary.main">
                <h2>Write a blog</h2>
                <FormControl fullWidth>
                  <TextField
                    label="Blog Title"
                    variant="filled"
                    inputRef={titleRef}
                    fullWidth={true}
                  />
                  <TextField
                    label="Blog Body"
                    variant="filled"
                    inputRef={bodyRef}
                    fullWidth={true}
                    InputProps={{
                        className: classes.input2
                      }}
                    multiline
                  />
                </FormControl>
                <Button variant="contained" color="primary" onClick={() => AddBlog()}>
                  Submit
              </Button>
              </form>
            </Grid>  
        </div>
      </div>
    );
  }