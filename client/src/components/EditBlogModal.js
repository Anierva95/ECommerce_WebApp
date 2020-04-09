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


  const [blogTitle, SetBlogTitle] = useState(props.Title);
  const [blogBody, SetBlogBody] = useState(props.Body);

  function loadBlogs() {
    API.getBlogPosts().then(res => {
      dispatch({
        type: "GET_BLOGS",
        blogs: res.data
      })
    })
    .catch(err => console.log(err));
  };


  const [state, dispatch] = useStoreContext();

  function editBlog(id) {
    console.log(blogTitle)
    console.log(blogBody)
    console.log(id)
    API.updateBlogPost(id, {
      Title: blogTitle,
      Body: blogBody,
    }).then(res => console.log(res))
    setTimeout(() => {
      loadBlogs()
      SetBlogTitle("")
      SetBlogBody("")
      handleClose();
    }, 100);
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    SetBlogTitle(props.Title)
    SetBlogBody(props.Body)
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
                <h2>Edit Blog #{props.id}</h2>
                <FormControl fullWidth>
                  <TextField
                    label="Blog Title"
                    variant="filled"
                    fullWidth={true}
                    value={blogTitle}
                    onChange = {e => SetBlogTitle(e.target.value)}
                  />
                  <TextField
                    label="Blog Body"
                    variant="filled"
                    fullWidth={true}
                    InputProps={{
                        className: classes.input2
                      }}
                    multiline
                    value={blogBody}
                    onChange = {e => SetBlogBody(e.target.value)}
                  />
                </FormControl>
                <Button variant="contained" color="primary" onClick={() => editBlog(props.id)}>
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