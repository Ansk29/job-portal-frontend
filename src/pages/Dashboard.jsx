import React from "react";
import AdminDashboard from "./dashboard/AdminDashboard";
import EmployerDashboard from "./dashboard/EmployerDashboard";
import CandidateDashboard from "./dashboard/CandidateDashboard";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  if (!role) return <div>Invalid user</div>;

  if (role === "admin") return <AdminDashboard />;
  if (role === "employer") return <EmployerDashboard />;
  if (role === "candidate") return <CandidateDashboard />;

  return <div>Unknown role</div>;
};

export default Dashboard;
