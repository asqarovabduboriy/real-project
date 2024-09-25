import React, { useState, useEffect } from "react";
import "./Products.scss";
import axios from "axios";
import Edit from "../EditModal/Edit";
import img1 from "../../assets/imgs/img1.png";
import { Link,useParams,useLocation,useSearchParams,useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { Button } from "@mui/material";
import { IoMdClose } from "react-icons/io";

const Products = ({ data, isAdmin, setReload }) => {
  const [edit, setEdit] = useState(null);
  const [searchparams, setSearchparams] = useSearchParams();
  const [detaildata, setDetaildata] = useState(null);

  const handleDelete = (id) => {
    console.log(id);

    if (window.confirm("Are you sure?")) {
      axios
        .delete(`https://solihov.uz/product/delete/${id}`,{method: "DELETE"})
        .then((res) => console.log(res.data ))
        .catch((err) => console.log(err));
  };
}

  useEffect(() => {
    let id = searchparams.get("detail");
    console.log(id);
    
    if(id){
      axios
        .get(`https://solihov.uz/product/get/${id}`)
        .then((res) => setDetaildata(res.data))
        .catch((err) => console.log(err));
    }
  }, [searchparams]);

  const productItems = data?.map((el, index) => (
    <div key={el.id} className="card">
        <img src={img1} alt="" onClick={() => setSearchparams({detail: el.id})} />
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

      {
        detaildata ? 
        <Modal>
          <Button variant="contained" onClick={() => setDetaildata(null)}><IoMdClose/></Button>  
            <img src={img1} alt="" /> 
            <h1>{detaildata.name}</h1> 
        </Modal>

        : null
      }
      {edit ? (
        <Edit edit={edit} setEdit={setEdit} setReload={setReload} />
      ) : null}
    </>
  );
};

export default Products
