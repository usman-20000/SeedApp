import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../components/Input";
import { BaseUrl, colors } from "../assets/Data";

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password
    };

    try {
      const response = await fetch(`${BaseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Registration successful:', result);
        // Redirect to the login page or handle success as needed
        history.push('/login');
        alert('Registered Successfully...');
      } else {
        console.error('Registration failed:', result);
        // Handle error as needed
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle error as needed
    }
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ backgroundColor: colors.blue, width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <h3 style={{ margin: '2%', backgroundColor: colors.blue, color: 'white' }}>Signup</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: '5%', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center' }}>
          <h2 style={{ marginTop: '2%', color: 'black' }}>Register</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%', marginTop: '5%' }}>
            <Input text="Name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input text="Email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input text="Password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button
              onClick={handleRegister}
              style={{ width: '100%', fontWeight: 'bold', color: 'white', borderWidth: 0, backgroundColor: colors.blue, height: 40, marginTop: '5%' }}
            >
              Register
            </button>
            <Link to="/login" style={{ width: '100%', marginTop: '5%' }}>
              <button
                style={{ width: '100%', fontWeight: 'bold', color: 'white', borderWidth: 0, backgroundColor: colors.blue, height: 40 }}
              >
                Go to Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
