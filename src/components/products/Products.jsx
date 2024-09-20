import React, { useState, useEffect } from "react";
import "./Products.scss";
import { memo } from "react";
import axios from "axios";
import Edit from "../EditModal/Edit";
import img1 from "../../assets/imgs/img1.png";

const Products = ({ data, isAdmin, setReload }) => {
  const [edit, setEdit] = useState(null);

  const handleDelete = (id) => {
    console.log(id);
    
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`https://solihov.uz/product/delete/${id}`)
        .then((res) => setReload((p) => !p))
        .catch((err) => console.log(err));
    }
  };

  const productItems = data?.map((el, index) => (
    <div key={el.id} className="card">
      <img src={img1} alt="" />
      <h3 title={el.name}>{el.model}</h3>
      <p>{el.name}</p>
      {isAdmin ? (
        <>
          <div className="btn_wrapper">
            <button className="edit" onClick={() => setEdit(el)}>
              Edit
            </button>
            <button className="delete" onClick={() => handleDelete(el.id)}>
              Delete
            </button>
          </div>
        </>
      ) : null}
    </div>
  ));

  return (
    <>
      <div className="wrapper">{productItems}</div>
      {edit ? (
        <Edit edit={edit} setEdit={setEdit} setReload={setReload} />
      ) : null}
    </>
  );
};

export default memo(Products);
