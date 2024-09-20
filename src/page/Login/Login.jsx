import React, { useState } from "react";
import './Login.scss'
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useGetvaleinput } from "../../Hook/useGetvaleinput"; // Hook joylashgan joyiga ko'ra import qilish
import { useNavigate } from "react-router-dom";


const initialLoginState = {
  username: "",
  password: "",
};

const initialRegisterState = {
  username: "",
  phone_number:"",
  full_name: "",
  email: "",
  password: "",
  address:""
};

const initialVerifyState = {
  email: "",
  verifyToken: "",
};

const LoginRegisterVerification = () => {
  const [view, setView] = useState("login"); // login, register, verify
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // Login uchun hook
  const { formdata: loginData, handleChange: handleLoginChange } = useGetvaleinput(initialLoginState);
  
  // Register uchun hook
  const { formdata: registerData, handleChange: handleRegisterChange } = useGetvaleinput(initialRegisterState);
  
  // Verify uchun hook
  const { formdata: verifyData, handleChange: handleVerifyChange } = useGetvaleinput(initialVerifyState);

  // Register function
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://auth.solihov.uz/user/register", registerData)
      .then((response) => {
        setMessage("Registration successful! Verification email sent.");
        setView("verify"); // After registration, switch to verification
      })
      .catch((error) => {
        setError(error.response?.data?.message || "Registration failed.");
      });
  };

  // Login function
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://auth.solihov.uz/user/login", loginData)
      .then((response) => {
        setMessage("Login successful!");
        localStorage.setItem("token",response.data.AccessToken);
        navigate("/admin/dashboard")
        setError("");
      })
      .catch((error) => {
        setError(error.response?.data?.message || "Login failed.");
      });
  };

  // Email verification function
  const handleVerify = (e) => {
    e.preventDefault();
    axios
      .post("https://auth.solihov.uz/user/verify_email", verifyData)
      .then((response) => {
        setMessage("Email verified successfully!");
        setError("");
        setView("login"); // After verification, switch to login
      })
      .catch((error) => {
        setError(error.response?.data?.message || "Verification failed.");
      });
  };

  return (
    <div>
      {view === "login" && (
        <form onSubmit={handleLogin} className="login_wrapper">
          <Typography variant="h5">Login</Typography>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            value={loginData.username}
            onChange={handleLoginChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <Button onClick={() => setView("register")}>Need an account? Register</Button>
        </form>
      )}

      {view === "register" && (
        <form onSubmit={handleRegister} className="login_wrapper">
          <Typography variant="h5">Register</Typography>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={registerData.email}
            onChange={handleRegisterChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={registerData.password}
            onChange={handleRegisterChange}
            required
          />
          <TextField
            label="Full Name"
            name="full_name"
            variant="outlined"
            fullWidth
            value={registerData.full_name}
            onChange={handleRegisterChange}
            required
          />
          <TextField
            label="Phone Number"
            name="phone_number"
            variant="outlined"
            fullWidth
            value={registerData.phone_number}
            onChange={handleRegisterChange}
            required
          />
          <TextField
            label="Address"
            name="address"
            variant="outlined"
            fullWidth
            value={registerData.address}
            onChange={handleRegisterChange}
            required
          />
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            value={registerData.username}
            onChange={handleRegisterChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
          <Button onClick={() => setView("login")}>Already have an account? Login</Button>
          {message && <p style={{ color: "green" }}>{message}</p>}
        </form>
      )}

      {view === "verify" && (
        <form onSubmit={handleVerify} className="login_wrapper">
          <Typography variant="h5">Verify Email</Typography>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={verifyData.email}
            onChange={handleVerifyChange}
            required
          />
          <TextField
            label="Verification Token"
            name="verifyToken"
            variant="outlined"
            fullWidth
            value={verifyData.verifyToken}
            onChange={handleVerifyChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Verify Email
          </Button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}

     
    
    </div>
  );
};

export default LoginRegisterVerification;
