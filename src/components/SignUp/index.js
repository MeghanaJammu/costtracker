import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  const onSubmittingForm = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmittingForm}>
        <h1>Create an Account</h1>
        <p>Join ProjectCostTracker to manage your projects efficiently.</p>
        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="you@example.com"
            id="email"
            type="text"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="(min. 6 characters)"
            id="password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?<Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
