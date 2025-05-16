import React from "react";
import { useNavigate, Link } from "react-router-dom";

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, Employer {user?.name}!</h1>
      <ul>
        <li><Link to="/create-job">Post a Job</Link></li>
        <li><Link to="/my-jobs">My Posted Jobs</Link></li>
        {/* Remove the direct View Applications link */}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default EmployerDashboard;
