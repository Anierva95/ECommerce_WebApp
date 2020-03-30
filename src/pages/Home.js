import React from 'react';
import Navbar from '../components/Navbar';
import SalesHeader from '../components/SalesHeader'
import ProductRow from '../components/ProductRow'

export default function Home(){


    return(
       <div>
          <Navbar/>
          <SalesHeader/>
          <ProductRow/>
          <ProductRow/>
          <ProductRow/>
          <ProductRow/>
          <ProductRow/>
        </div>
    )}