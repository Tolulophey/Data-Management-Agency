import React from 'react';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Price from './Pages/Price';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import About from './components/About/About';

function App() {
  
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/#about" element={<About />}/>
            <Route path="/pricing" element={<Price />}/>
            <Route path="/contact" element={<ContactPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignupPage />}/>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
