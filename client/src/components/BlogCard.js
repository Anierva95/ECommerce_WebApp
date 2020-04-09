import React from 'react';
import { TableBody } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function OutlinedCard(props) {

  return (
    <TableBody>
      <TableRow>
        <TableCell>
          <List>
            <ListItem>
              <h3>{props.Title}</h3>
            </ListItem>
            <ListItem>
              {props.Body}
            </ListItem>
            <ListItem>
              <small>Date Published: {props.Date}</small>
            </ListItem>
          </List>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}