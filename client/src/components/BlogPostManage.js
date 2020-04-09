import React from 'react';
import { Grid } from '@material-ui/core';
import BlogCardManage from './BlogCardManage'

export default function BlogPost(props) {
    return(
        <Grid item xs={12}>
        <BlogCardManage
        Title = {props.Title}
        Body = {props.Body}
        Date = {props.Date}
        Key = {props.Key}
        />
        </Grid> 
    )
}