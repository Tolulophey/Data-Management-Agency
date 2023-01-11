import React, {useState} from 'react';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Price from './Pages/Price';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import ScrollToTop from './components/scrollTop';
import Dashboard from './components/Dashboard/Dashboard';


export const UserContext = React.createContext()
function App() {
  const [authenticated, setAuthenticated] = useState(
  localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pricing" element={<Price />}/>
            <Route path="/contact" element={<ContactPage />}/>
        </Routes>
        <UserContext.Provider value={{authenticated: authenticated, setAuthenticated: setAuthenticated}}>
          <Routes>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignupPage />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
