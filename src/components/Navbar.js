import React from 'react';
import { Link } from 'react-router-dom';

const AppNavbar = () => (
  <nav>
    <div><strong>VillageStay</strong></div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/plan-trip">PlanTrip</Link>

      
    </div>
  </nav>
);

export default AppNavbar;

