import React, { useEffect, useState } from 'react'
import Products from "../../../components/products/Products";
import axios from "axios";
import { useGetProductsQuery } from '../../../context/products';
import { Typography } from '@mui/material';

const ManageProducts = () => {
 const {data,isLoading} = useGetProductsQuery()

  return (
    <div className="container">
      <Typography variant="h4">Manage Products</Typography>
      <Products data={data} isLoading={isLoading} isAdmin={true}/>
    </div>
  );
};

export default ManageProducts;
