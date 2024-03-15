
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Header from './components/Public/Navbar';
import Footer from './components/Public/Footer';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Public/Navbar';
import Login from './pages/Login';
import SignUp from './pages/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/header" element={<Navbar/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/footer" element={<Header/>} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          
      </Routes>
    </Router>
  );
};

export default App;
