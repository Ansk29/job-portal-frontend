import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    // If no user found, redirect to login (optional)
    navigate("/login");
    return null;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the Dashboard, {user.name}!</h1>

      {user.role === "candidate" && (
        <>
          <h2>Candidate Panel</h2>
          <p>Apply for jobs, view your applications, update profile, etc.</p>
          {/* Add candidate-specific components or links here */}
        </>
      )}

      {user.role === "employer" && (
        <>
          <h2>Employer Panel</h2>
          <p>Create jobs, view applications for your jobs, update jobs, etc.</p>
          {/* Add employer-specific components or links here */}
        </>
      )}

      {user.role === "admin" && (
        <>
          <h2>Admin Panel</h2>
          <p>Manage jobs, applications, users, update profiles, etc.</p>
          {/* Add admin-specific components or links here */}
        </>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
