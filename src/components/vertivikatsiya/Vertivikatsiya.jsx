import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGetvaleinput } from "../../Hook/useGetvaleinput";
import "./Vertivikatsiya.scss";

const instalstate = {
  email: "",
  verifyToken: "",
};

const Verification = () => {
  const { formdata, handleChange } = useGetvaleinput(instalstate);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();

    const payload = {
      verifyToken: formdata.verifyToken,
    };

    axios
      .post("https://auth.solihov.uz/user/verify_email", payload)
      .then((res) => {
        console.log("Verification successful:", res.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error(
          "Verification failed:",
          error.response?.data?.message || error.message
        );
        setError(error.response?.data?.message || "Verification failed");
      });
  };

  return (
    <div className="container">
      <div className="wrapper_vertivikatsiya">
        <h2>Email Verification</h2>
        <form onSubmit={handleVerify}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            value={formdata.email}
            onChange={handleChange}
            required
          />
          <TextField
            name="verifyToken"
            label="Verification Token"
            variant="outlined"
            value={formdata.verifyToken}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Verify
          </Button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Verification;
