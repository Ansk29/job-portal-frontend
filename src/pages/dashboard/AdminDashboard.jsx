import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, Admin {user?.name}!</h1>
      <ul>
        <li><a href="/all-users">Manage Users</a></li>
        <li><a href="/all-jobs">View All Jobs</a></li>
        <li><a href="/all-applications">View All Applications</a></li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
