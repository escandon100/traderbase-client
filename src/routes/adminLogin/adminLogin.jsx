import { useState } from 'react';
import axios from 'axios';
import './adminLogin.scss';

const AdminLogin = () =>  {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/adminLogin/adminLogin', form);
      localStorage.setItem('admin-token', res.data.token);
      window.location.href = '/adminDashboard';
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="adminLogin">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className="error">{error}</p>}
        <p>© Copyright 2025   Trader Base FX   All Rights Reserved.</p>

      </form>


    </div>
  );
}
export default AdminLogin



