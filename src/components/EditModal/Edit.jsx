import React, { useState } from "react";
import "./Edit.scss";
import axios from "axios";
import { Button, colors, TextField } from "@mui/material";
import { toast } from "react-toastify";

const instalsate = {
  color: "string",
  date_of_creation: "string",
  id: "string",
  image_url: "string",
  made_in: "string",
  model: "string",
  name: "string",
  storage_id: "string",
};

const Edit = ({ edit, setEdit, editProduct,isSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    let edits = {
      color: edit.color,
      date_of_creation: edit.date_of_creation,
      id: edit.id,
      image_url: edit.image_url,
      made_in: edit.made_in,
      model: edit.model,
      name: edit.name,
      storage_id: edit.storage_id,
    };

    editProduct({id: edit.id, body: edits});

    if (isSuccess) {
      setEdit(null);
      toast.success("Muvaffaqiyatli o'zgartirildi");
    }
  };

  return (
    <>
      <div className="edit_wrapper" onClick={() => setEdit(null)}></div>
      <div className="edit_modal">
        <form className="edit_form" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={edit.name}
            onChange={(e) => setEdit({ ...edit, name: e.target.value })}
          />
          <TextField
           id="outlined-basic" 
           label="Model"
           variant="outlined"
           name="model"
           value={edit.model}
           onChange={(e) => setEdit({ ...edit, model: e.target.value })}
           />
          <TextField
           id="outlined-basic" 
           label="Made in"
           variant="outlined"
           name="made_in"
           value={edit.made_in}
           onChange={(e) => setEdit({ ...edit, made_in: e.target.value })}
           />
          <TextField
           id="outlined-basic" 
           label="Color"
           variant="outlined"
           name="color"
           value={edit.color}
           onChange={(e) => setEdit({ ...edit, color: e.target.value })}
           />
          <TextField
           id="outlined-basic" 
           label="Date of creation"
           variant="outlined" 
           name="date_of_creation"
           value={edit.date_of_creation}
           onChange={(e) => setEdit({ ...edit, date_of_creation: e.target.value })}
           />
          <TextField
           id="outlined-basic"
           label="Storage id"
           variant="outlined"
           name="storage"
           value={edit}
           onChange={(e) => setEdit({ ...edit, storage_id: e.target.value })}
           />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            
          >
            Save
          </Button>
        </form>
      </div>
    </>
  );
};

export default Edit;
