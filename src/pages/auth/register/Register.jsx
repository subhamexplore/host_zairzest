import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "../authCSS/auth.scss";

const Register = () => {
  const [registerData, setRegisteredData] = useState({
    name: "",
    regdno: "",
    email: "",
    password: "",
  });
  const handleRegisterSubmit = async (e) => {
    try {
      e.preventDefault();
      // const rurl="https://web-backend-3bsv.onrender.com/create/user";
      const rturl = "http://localhost:5000/create/user";
      const res = await axios.post(rturl, registerData);
      if (res.status === 200) {
        toast.success("User Register done SuccessFully");
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error("Email ID is already in use");
      } else {
        toast.error(error.message);
      }
    }
  };
  const handleRegisterChange = (e) => {
    setRegisteredData({ ...registerData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="auth-box">
        <h1>Experience the Future Tech</h1>
        <p>Register for Zairzest 3.0</p>
        <form className="auth-box-form" onSubmit={handleRegisterSubmit}>
          <div>
            <input
              type="text"
              required
              name="name"
              value={registerData.name}
              onChange={handleRegisterChange}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="number"
              required
              name="regdno"
              value={registerData.regdno}
              onChange={handleRegisterChange}
              placeholder="Registration Number"
            />
          </div>
          <div>
            <input
              type="email"
              required
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
              placeholder="Email here"
            />
          </div>
          <div>
            <input
              type="password"
              required
              name="password"
              value={registerData.password}
              onChange={handleRegisterChange}
              placeholder="Password"
            />
          </div>

          <button>Register</button>
        </form>
        <button>Sign Up with Google</button>
        <div>
          Already registered ! <Link to="/login">Login</Link>
        </div>
      </div>
      <ToastContainer theme="colored" />
    </div>
  );
};

export default Register;