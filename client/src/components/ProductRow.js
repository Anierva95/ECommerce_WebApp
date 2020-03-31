import React, {useEffect, useState} from 'react';
import MediaCard from '../components/Card';
import { Grid } from '@material-ui/core';
import API from "../utils/API";


export default function ProductRow() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    loadProducts()
  }, [])

  function loadProducts() {
    API.getProducts().then(res => setProducts(res.data))
  }
  
  return (
    <>
    {products.map(product => (
       <Grid item xs={3}>
       <MediaCard 
       name = {product.Item}
       description = {product.Description}
       />
     </Grid>
    ))}
     
    </>
  )
}