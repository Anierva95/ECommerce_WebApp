import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import BlogPostManage from '../components/BlogPostManage';
import API from '../utils/API'
import { useStoreContext } from "../utils/GlobalState";

export default function AddItemPage() {

    const [state, dispatch] = useStoreContext();

    function loadBlogs() {
        API.getBlogPosts().then(res => {
          dispatch({
            type: "GET_BLOGS",
            blogs: res.data
          })
        })
        .catch(err => console.log(err));
      };
    
      useEffect(() => {
        loadBlogs()
      }, []);
    return(
        <>
        <Grid container direction="row">
      <Grid item xs={1} />
      <Grid item container direction="row" xs={10}>
      {state.blogPosts.map(blog => (
          <BlogPostManage
          Title = {blog.Title}
          Body = {blog.Body}
          Date = {blog.Date}
          Key = {blog._id}
          /> 
      ))}
             
      <Grid item xs={1} />
      </Grid>
      </Grid>
        </>
    )
    }