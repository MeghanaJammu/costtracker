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
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?<Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
