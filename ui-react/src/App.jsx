import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './Loading';
import Sidebar from './components/Auth/Sidebar';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import Settings from './components/Auth/Settings';
import EmployerLogin from './pages/EmployerPages/EmployerLogin';
import EmployerSignup from './pages/EmployerPages/EmployerSignup';
import TopBar from './components/Admin/TopBar';
import AdminSidebar from './components/Admin/AdminSideBar';
import AdminDashboard from './pages/AdminPages/AdminDashboard';
import DetailDashboard from './components/Admin/DetailDashboard';


const Navbar = lazy(() => import('./components/Public/Navbar'));
const Footer = lazy(() => import('./components/Public/Footer'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/Signup'));
const TermsAndConditions = lazy(() => import('./pages/TermsandConditions'));

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
