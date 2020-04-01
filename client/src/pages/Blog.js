import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import BlogHeader from '../components/BlogHeader'
import { Grid } from '@material-ui/core';
import BlogPost from '../components/BlogPost';
import API from '../utils/API'

export default function Blog() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        loadBlogs()
    }, [])

    function loadBlogs() {
        API.getBlogPosts().then(res => setBlogs(res.data))
    }

    return(
        <div>
            <Navbar/>
            <BlogHeader/>
            <Grid container direction="row">
          <Grid item xs={2} />
          <Grid item container direction="row" xs={8}>
          {blogs.map(blog => (
              <BlogPost
              Title = {blog.Title}
              Body = {blog.Body}
              Date = {blog.Date}
              /> 
          ))}
                 
          <Grid item xs={2} />
          </Grid>
          </Grid>

        </div>
    )
}