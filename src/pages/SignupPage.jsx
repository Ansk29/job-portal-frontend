import React, { useState } from "react";
import axios from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate", // default role
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await axios.post("auth/signup", formData);
      setMessage(res.data.message); // Should be: "User registered! Check email for OTP."
      // Save email to sessionStorage to prefill in OTP page
      sessionStorage.setItem("email", formData.email);
      navigate("/verify-otp");


    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} /><br /><br />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} /><br /><br />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} /><br /><br />
        <select name="role" onChange={handleChange}>
          <option value="candidate">Candidate</option>
          <option value="employee">Employee</option>
          <option value="admin">Admin</option> {/* if you support admin */}
        </select><br /><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
