import React from "react";
import "./Navbar.scss";
import { Button, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container navbar">
          <div className="logo">
            <h1>Nasia<span>Savdo</span></h1>
          </div>
          <ul>
            <li>Product</li>
            <li>Contract</li>
          </ul>
          <div className="search">
            <TextField  variant="outlined"  placeholder="Search"/>
            <Button variant="contained">Search <FaSearch/> </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
