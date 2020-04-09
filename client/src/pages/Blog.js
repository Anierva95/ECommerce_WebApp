import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import BlogHeader from '../components/BlogHeader'
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import BlogPost from '../components/BlogPost';
import API from '../utils/API'
import { useStoreContext } from "../utils/GlobalState";

export default function Blog() {

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
  return (
    <div>
      <Navbar />
      <Paper>
        <BlogHeader />
        <Grid container direction="row">
          <Grid item xs={2} />
          <Grid item container direction="row" xs={8}>
            {state.blogPosts.map(blog => (
              <BlogPost
                Title={blog.Title}
                Body={blog.Body}
                Date={blog.Date}
                Key={blog._id}
              />
            ))}
            <Grid item xs={2} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}