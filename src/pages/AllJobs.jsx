import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/jobs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs(res.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <button onClick={() => handleViewDetails(job._id)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default AllJobs;
