import React, { useEffect, useState } from "react";
import Products from "../../../components/products/Products";
import axios from "axios";
import { useGetProductsQuery } from "../../../context/products";

const Dashboard = () => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [reload, setReload] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(" https://solihov.uz/product/list")
  //     .then((res) => setData(res.data.all_products))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [reload]);

  const { data, isSuccess, isLoading } = useGetProductsQuery();

  // console.log(data.all_products);

  return (
    <>
      <div className="container">
        <Products data={data} isLoading={isLoading} isSuccess={isSuccess} />
      </div>
    </>
  );
};

export default Dashboard;
