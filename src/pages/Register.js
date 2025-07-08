import React from 'react';

const Register = () => (
  <div className="center-screen">
    <div className="box">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <select>
          <option value="">Select Role</option>
          <option value="villager">Villager</option>
          <option value="tourist">Tourist</option>
        </select>
        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  </div>
);

export default Register;