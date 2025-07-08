import React from 'react';

const Login = () => (
  <div className="center-screen">
    <div className="box">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <select>
          <option value="">Select Role</option>
          <option value="villager">Villager</option>
          <option value="tourist">Tourist</option>
        </select>
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  </div>
);

export default Login;
