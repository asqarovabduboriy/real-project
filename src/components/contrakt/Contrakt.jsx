import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contrakt.scss";
import { Box, Button } from "@mui/material";
import TwoEdit from "../EditTwo/TwoEdit";

const Contrakt = () => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    axios
      .get("https://solihov.uz/contract/list")
      .then((res) => setData(res.data.all_contracts))
      .catch((err) => console.log(err));
  }, []);
  

  const handleDelete = (id) => {
    fetch(`https://solihov.uz/contract/delete/${id}`, {
        method: 'DELETE', // DELETE so'rovini ishlatamiz
        headers: {
            'Content-Type': 'text/plain',
            // agar kerak bo'lsa, boshqa headerlar
        }
        
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // javobni JSON formatiga o'tkazamiz
    })
    .then((data) => console.log(data)) // muvaffaqiyatli javobni ko'rsatamiz
    .catch((err) => console.log(err)); // xatolikni ko'rsatamiz
};




  const contract = data?.map((el, index) => (
    <div key={el.id || index} className="card_contrakt">
      <h3>
        Address: <p>{el.consumer_address}</p>
      </h3>
      <h3>
        {" "}
        Name: <p>{el.consumer_name}</p>
      </h3>
      <h3>
        {" "}
        Passport number: <p>{el.consumer_passport_serial}</p>
      </h3>
      <h3>
        {" "}
        Phone number: <p>{el.consumer_phone_number}</p>
      </h3>
      <span> Price: {el.price}$</span>
      <div
        className={
          el.status === "pending"
            ? "statust_pending"
            : el.status === "canceled"
            ? "statust_canceled"
            : "statust"
        }
      >
        <span>{el.status}</span>
      </div>
      <Box display="flex" alignItems={"center"} gap={2}>
        <Button variant="contained" color="success" onClick={() => setOpen(el)} className="btn">
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(el.id)}
          className="btn" 
        >
          Delete
        </Button>
      </Box>
    </div>
  ));

  return (
    <>
      <div className="container">
        <div className="wrapper_contract">{contract}</div>

      </div>
      {
        open ? <TwoEdit open={open}  setOpen={setOpen} /> : null
      }
    </>
  );
};

export default Contrakt;
