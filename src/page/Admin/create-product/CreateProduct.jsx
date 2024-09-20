import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { IoIosCloseCircle } from "react-icons/io";
import { TextField, Button, Typography } from "@mui/material";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const API_URL = "https://solihov.uz/product/create";

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price: parseFloat(price),
      description,
      category,
      image: preview, // You might want to send the file directly to your server instead
    };

    axios
      .post(API_URL, newProduct, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toast.success("Product added successfully!");
        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage(null);
        setPreview("");
      })
      .catch((error) => {
        console.error("There was an error adding the product!", error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview("");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="product-form">
        <Typography variant="h3">Create Product</Typography>
        <div>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            fullWidth
          />
        </div>
        <div>
          {/* Yashirin fayl input va yuklash tugmasi */}
          <input
            accept="image/*"
            style={{ display: "none" }} // Fayl inputini yashiramiz
            id="image-upload"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <Button variant="contained" color="primary" component="span">
              Upload Image
            </Button>
          </label>
        </div>

        {preview && (
          <div className="image-preview-container" style={{ marginTop: "10px" }}>
            <img
              src={preview}
              alt="Preview"
              className="image-preview"
              width={100}
              height={100}
              style={{ borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <IoIosCloseCircle
              style={{ cursor: "pointer", marginLeft: "10px", fontSize: "24px" }}
              onClick={() => {
                setPreview("");
                setImage(null);
              }}
            />
          </div>
        )}

        <Button type="submit" variant="contained" color="success" style={{ marginTop: "20px" }}>
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default CreateProduct;
