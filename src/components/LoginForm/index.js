import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onSubmittingForm = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('User Logged In Successfully!!', {
        position: 'top-center',
      });
      window.location.href = '/';
    } catch (error) {
      toast.error(error.message, { position: 'bottom-center' });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmittingForm}>
        <h1>Login to ProjectCostTracker</h1>
        <p>Enter your credentials to access your projects.</p>
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
            id="password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Do you not have an account?<Link to="/sign-up">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
