import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PlanTrip from './pages/PlanTrip';
import BookingPage from './pages/BookingPage';



import VillageDetail from './pages/VillageDetail';
import './index.css';

const App = () => (
  <Router>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     <Route path="/village/:id" element={<VillageDetail />} />
     <Route path="/plan-trip" element={<PlanTrip />} />
     <Route path="/booking" element={<BookingPage />} />
      {/* <Route path="/village/:id" element={<VillageDetail />} /> */}


      
      


    </Routes>
    <Footer />
  </Router>
);

export default App;
