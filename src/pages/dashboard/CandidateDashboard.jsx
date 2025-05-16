import React from "react";
import { useNavigate, Link } from "react-router-dom";

const CandidateDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {user?.name} (Candidate)!</h1>
      <ul>
        <li><Link to="/jobs">View Jobs</Link></li>
        <li><Link to="/my-applications">My Applications</Link></li>
        <li><Link to="/update-profile">Update Profile</Link></li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default CandidateDashboard;
