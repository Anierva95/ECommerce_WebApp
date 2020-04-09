import React from 'react';
import { Grid } from '@material-ui/core';
import BlogCard from './BlogCard'
import {Table, TableContainer} from '@material-ui/core';

export default function BlogPost(props) {
    return (
        <Grid item xs={12}>
            <TableContainer>
                <Table>
                        <BlogCard
                            Title={props.Title}
                            Body={props.Body}
                            Date={props.Date}
                            Key={props.Key}
                        />
                </Table>
            </TableContainer>
        </Grid>
    )
}