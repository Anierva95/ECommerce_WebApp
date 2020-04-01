import React, { useEffect, useState } from 'react';
import MediaCard from '../components/Card';
import { Grid } from '@material-ui/core';
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";


export default function ProductRow() {

  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    loadProducts()
  }, [])

  function loadProducts() {
    API.getProducts().then(res => {
      dispatch({
        type: "GET_PRODUCTS",
        products: res.data
      })
    })
    .catch(err => console.log(err));
  }

  return (
    <>
      {state.products.map(product => (
        <Grid item xs={3}>
          <MediaCard
            name={product.Item}
            description={product.Description}
            price={product.Price}
          />
        </Grid>
      ))}

    </>
  )
}