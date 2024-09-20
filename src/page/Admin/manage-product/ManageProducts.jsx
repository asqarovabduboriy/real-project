import React, { useEffect, useState } from 'react'
import Products from "../../../components/products/Products";
import axios from "axios";

const ManageProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(" https://solihov.uz/product/list")
      .then((res) => setData(res.data.all_products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [reload]);

  return (
    <div className="container">
      <h2>Manage Products</h2>
      <Products data={data} isLoading={loading} isAdmin={true}/>
    </div>
  );
};

export default ManageProducts;
