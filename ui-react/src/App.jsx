import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './Loading';
import Sidebar from './components/Auth/Sidebar';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';


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
         
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
