import React, { useState } from 'react';
import './App.css';

function LoginPage() {
  // State to manage form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State to handle loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Simulate an API call (replace this with actual login logic)
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        setLoading(false);
        alert('Login successful!');
      } else {
        setLoading(false);
        setError('Invalid email or password.');
      }
    }, 1500);
  };

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <form className="login-form" onSubmit={handleLogin}>
        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email/Username</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email or username"
            required
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {/* Link to Signup */}
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign up here</a>.
      </p>
    </div>
  );
}

export default LoginPage;
