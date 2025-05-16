import React, { useEffect, useState } from "react";
import axios from "axios";

const CandidateApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:5000/api/applications/candidate", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setApplications(response.data); // assuming response is an array
      } catch (error) {
        console.error("Error fetching applications", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (applications.length === 0) return <div>No applications found.</div>;

  return (
    <div style={{ padding: "1.5rem" }}>
      <h2>My Applications</h2>
      {applications.map((app) => (
        <div key={app._id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          <p><strong>Job Title:</strong> {app.job?.title}</p>
          <p><strong>Company:</strong> {app.job?.company}</p>
          <p><strong>Status:</strong> {app.status}</p>
          <p><strong>Applied On:</strong> {new Date(app.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default CandidateApplications;
