import React from "react";
import "./Edit.scss";
import axios from "axios";
import { Button, TextField } from "@mui/material";

const Edit = ({ edit, setEdit, setReload }) => {
  const handleEdit = () => {
    axios
      .put(`https://solihov.uz/product/update/${edit.id}`, edit)
      .then((res) => {
        setEdit(null);
        setReload((prev) => !prev);
      });
  };

  return (
    <>
      <div className="edit_wrapper" onClick={() => setEdit(null)}></div>
      <div className="edit_modal">
        <div className="edit_form">
          <h2>Edit Product</h2>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={edit.name}
            onChange={(e) => setEdit({ ...edit, name: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Model"
            variant="outlined"
            value={edit.model}
            onChange={(e) => setEdit({ ...edit, model: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Color"
            variant="outlined"
            value={edit.color}
            onChange={(e) => setEdit({ ...edit, color: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Made in"
            variant="outlined"
            value={edit.made_in}
            onChange={(e) => setEdit({ ...edit, made_in: e.target.value })}
          />
          <Button variant="contained" onClick={handleEdit}>
            Save
          </Button>

          <Button variant="contained" onClick={() => setEdit(null)}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default Edit;
