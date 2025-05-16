import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await axios.get(`http://localhost:5000/api/jobs/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("Job fetched:", response.data);

                setJob(response.data);
            } catch (error) {
                console.error("Error fetching job:", error);
                setJob(null);
            } finally {
                setLoading(false);
            }
        };

        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUserRole(storedUser.role);
        }

        fetchJob();
    }, [id]);

    const handleApply = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.post(
                "http://localhost:5000/api/applications", // no /apply/:id
                { jobId: id }, // pass jobId in the body
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert("Applied successfully!");
            console.log("Apply response:", res.data);
        } catch (error) {
            alert("Application failed already applied");
            console.error("Apply error:", error.response?.data || error.message);
        }
    };


    if (loading) return <div>Loading...</div>;

    if (!job) return <div>Job not found</div>;

    return (
        <div style={{ padding: "1.5rem" }}>
            <h2>{job.title}</h2>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> ₹{job.salary}</p>
            <p><strong>Posted By:</strong> {job.postedBy?.name}</p>

            {userRole === "candidate" && (
                <button onClick={handleApply} style={{ marginTop: "1rem" }}>
                    Apply Now
                </button>
            )}
        </div>
    );
};

export default JobDetails;
