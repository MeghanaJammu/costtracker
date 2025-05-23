import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./index.css"

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
    <div className="bg-cont">
      <form className="login-form" onSubmit={onSubmittingForm}>
        <h1 className="heading">Login to ProjectCostTracker</h1>
        <p className="para">Enter your credentials to access your projects.</p>
        <div className="inp-cont">
          <label className="para" htmlFor="email">
            Email
          </label>
          <input
            className="inp-box"
            placeholder="you@example.com"
            id="email"
            type="text"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div className="inp-cont">
          <label className="para" htmlFor="password">
            Password
          </label>
          <input
            className="inp-box"
            id="password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <button className="btn" type="submit">
          Login
        </button>
        <p className="para">
          Do you not have an account?<Link to="/sign-up">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
