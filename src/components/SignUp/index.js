import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase.js';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
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
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
        });
      }
      toast.success('User Registered Successfully!!', {
        position: 'top-center',
      });
      window.location.href = '/';
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: 'bottom-center' });
    }
  };

  return (
    <div className="bg-cont">
      <form className="login-form1" onSubmit={onSubmittingForm}>
        <h1 className="heading">Create an Account</h1>
        <p className="para">
          Join ProjectCostTracker to manage your projects efficiently.
        </p>
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
            placeholder="(min. 6 characters)"
            id="password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <button className="btn" type="submit">
          Sign Up
        </button>
        <p className="para">
          Already have an account?<Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
