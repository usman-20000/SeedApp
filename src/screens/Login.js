import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { BaseUrl, colors } from "../assets/Data";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(`${BaseUrl}/register`);
      const json = await response.json(); // Add await here
      if (Array.isArray(json)) { // Check if the data is an array
        setData(json);
      } else {
        console.error('Fetched data is not an array:', json);
      }
    } catch (e) {
      console.log('error login:', e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogin = () => {
    try {
      const checkId = data.find((item) => item.email === email && item.password === password);
      if (checkId) {
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Login failed. Please check your email and password.');
      }
    } catch (e) {
      console.log('login error:', e);
    }
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ backgroundColor: colors.blue, width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <h3 style={{ margin: '2%', backgroundColor: colors.blue, color: 'white' }}>Login</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: '5%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center' }}>
          <h2 style={{ marginTop: '5%', color: 'black' }}>Login</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%', marginTop: '5%' }}>
            <Input text="Email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input text="Password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button
              onClick={handleLogin}
              style={{ width: '100%', fontWeight: 'bold', color: 'white', borderWidth: 0, backgroundColor: colors.blue, height: 40, marginTop: '5%' }}
            >
              Login
            </button>
          </div>
        </div>
        <span style={{ height: 400, backgroundColor: 'black', border: `1px solid ${colors.blue}` }} />
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center' }}>
          <h2 style={{ marginTop: '15%', color: 'black' }}>Register</h2>
          <span style={{ width: 350, textAlign: 'center' }}>Register with us for a faster checkout, to track the status of your order and more.</span>
          <Link to="/SignUp" style={{ width: '60%', borderRadius: 5, fontWeight: 'bold', color: 'black', borderWidth: 0, backgroundColor: '#F8F0E3', height: 40, marginTop: '5%' }}>
            <button style={{ width: '100%', fontWeight: 'bold', color: 'white', borderWidth: 0, backgroundColor: colors.blue, height: 40 }}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
