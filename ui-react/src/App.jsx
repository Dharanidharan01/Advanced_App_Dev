import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loading from './Loading';
import ErrorPage from './ErrorPage'; 
import JobApplicationForm from './layouts/JobApplicationForm';
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy-loaded components
const UserNavbar = lazy(() => import('./components/Auth/UserNavbar'));
const JobPosting = lazy(() => import('./components/Admin/Dashboard/JobPosting'));
const JobDetailsPage = lazy(() => import('./pages/JobDetailsPage'));
const PremiumPlan = lazy(() => import('./pages/PremiumPlan'));
const UpgradeModal = lazy(() => import('./components/Public/UpgradeModal'));

const LandingPage = lazy(() => import('./pages/LandingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/Signup'));
const TermsAndConditions = lazy(() => import('./pages/TermsandConditions'));
const Sidebar = lazy(() => import('./components/Auth/Sidebar'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Settings = lazy(() => import('./components/Auth/Settings'));
const EmployerLogin = lazy(() => import('./pages/EmployerPages/EmployerLogin'));
const EmployerSignup = lazy(() => import('./pages/EmployerPages/EmployerSignup'));
const AdminSidebar = lazy(() => import('./components/Admin/AdminSideBar'));
const AdminDashboard = lazy(() => import('./pages/AdminPages/AdminDashboard'));
const DetailDashboard = lazy(() => import('./components/Admin/DetailDashboard'));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // ProtectedRoute component to handle protected routes
  const ProtectedRoute = ({ element, ...rest }) => {
    return isLoggedIn ? (
      element
    ) : (
      <Navigate to="/login" replace />
    );
  };

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <SpeedInsights/>
        <Routes>
          <Route path="/navbar" element={<UserNavbar />} />
          <Route path="/jobposting" element={<JobPosting />} />
          <Route path="/jobdetails" element={<JobDetailsPage />} />
          <Route path="/premiumplan" element={<PremiumPlan />} />
          <Route path="/upgrademodel" element={<UpgradeModal />} />

          <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
          <Route path="/elogin" element={<EmployerLogin />} />
          <Route path="/esignup" element={<EmployerSignup />} />
          <Route path="/asidebar" element={<AdminSidebar />} />
          <Route path="/adashboard" element={<AdminDashboard />} />
          <Route path="/detaildashboard" element={<DetailDashboard />} />
          <Route path="/jobapplicationform" element={<JobApplicationForm />} />

          {/* Fallback route for any unmatched paths */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
