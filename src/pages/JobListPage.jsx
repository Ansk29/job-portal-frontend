import JobCard from "../components/JobCard";

function JobListPage() {
  // Dummy job data
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Bangalore" },
    { id: 2, title: "Backend Developer", company: "InnoSoft", location: "Hyderabad" },
    { id: 3, title: "Data Analyst", company: "DataWave", location: "Remote" },
  ];

  return (
    <div>
      <h2>All Jobs</h2>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobListPage;
