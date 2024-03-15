
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Header from './components/Public/Header';
import Footer from './components/Public/Footer';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="header" element={<Header/>} />
          <Route path="footer" element={<Footer/>} />
          <Route path="/" element={<LandingPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
