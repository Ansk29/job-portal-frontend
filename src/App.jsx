import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import VerifyOtpPage from "./pages/VerifyOtpPage";
import ForgotPassword from "./pages/ForgotPasswordPage";
import ResetPassword from "./pages/ResetPasswordPage";
import Login from "./pages/LoginPage";
import ChangePassword from "./pages/ChangePasswordPage";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";


import CreateJob from "./pages/CreateJob";
import AllJobs from "./pages/AllJobs";
import MyJobs from "./pages/MyJobs";
import JobDetails from "./pages/JobDetails";

import AllApplications from "./pages/AllApplications";
import UpdateProfile from "./pages/UpdateProfile";
import CandidateApplications from "./pages/CandidateApplications";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />


        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/jobs" element={<AllJobs />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/my-jobs" element={<MyJobs />} />

        <Route path="/all-applications" element={<AllApplications />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/my-applications" element={<CandidateApplications />} />
      </Routes>
    </Router>
  );
}

export default App;
