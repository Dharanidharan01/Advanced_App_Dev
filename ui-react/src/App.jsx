import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './Loading';

const Navbar = lazy(() => import('./components/Public/Navbar'));
const Footer = lazy(() => import('./components/Public/Footer'));
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
const TopBar = lazy(() => import('./components/Admin/TopBar'));
const AdminSidebar = lazy(() => import('./components/Admin/AdminSideBar'));
const AdminDashboard = lazy(() => import('./pages/AdminPages/AdminDashboard'));
const DetailDashboard = lazy(() => import('./components/Admin/DetailDashboard'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/sidebar" element={<Sidebar/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/elogin" element={<EmployerLogin/>} />
          <Route path="/esignup" element={<EmployerSignup/>} />
          <Route path="/atopbar" element={<TopBar/>} />
          <Route path="/asidebar" element={<AdminSidebar/>} />
          <Route path="/adashboard" element={<AdminDashboard/>} />
          <Route path="/detaildashboard" element={<DetailDashboard/>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
