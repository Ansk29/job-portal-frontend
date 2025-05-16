// src/pages/VerifyOtpPage.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyOtpPage = () => {
  const [email, setEmail] = useState(""); // Optional: pre-fill from signup
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        email,
        otp,
      });
      alert("✅ OTP Verified! You can now login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "❌ Verification failed.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold">Verify OTP</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full border p-2 rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOtpPage;
