import React from 'react';
import { Grid } from '@material-ui/core';
import BlogCard from './BlogCard'

export default function BlogPost(props) {
    return(
        <Grid item xs={12}>
        <BlogCard
        Title = {props.Title}
        Body = {props.Body}
        Date = {props.Date}
        Key = {props.Key}
        />
        </Grid> 
    )
}