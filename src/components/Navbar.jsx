import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/dashboard" style={{ marginRight: "1rem" }}>Dashboard</Link>

      {role === "candidate" && (
        <>
          <Link to="/jobs">View Jobs</Link>{" "}
          <Link to="/my-applications" style={{ marginLeft: "1rem" }}>My Applications</Link>
        </>
      )}

      {role === "employer" && (
        <>
          <Link to="/create-job">Post Job</Link>{" "}
          <Link to="/my-jobs" style={{ marginLeft: "1rem" }}>My Jobs</Link>{" "}
          <Link to="/applications" style={{ marginLeft: "1rem" }}>Applications</Link>
        </>
      )}

      {role === "admin" && (
        <>
          <Link to="/all-users">All Users</Link>{" "}
          <Link to="/all-jobs" style={{ marginLeft: "1rem" }}>All Jobs</Link>{" "}
          <Link to="/all-applications" style={{ marginLeft: "1rem" }}>All Applications</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
