import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      // Store the authentication token in local storage or cookies
      localStorage.setItem('token', response.data.token);
      // Redirect to the home page or update the authentication state
      // ...
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };
  return { email, setEmail, password, setPassword, handleSubmit };

  // return (
  //   <>
  //     <div class="login">
  //       <form onSubmit={handleSubmit}>
  //         <label for="chk" aria-hidden="true">
  //           Login
  //         </label>
  //         <input
  //           type="email"
  //           name="email"
  //           placeholder="Email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //         <input
  //           type="password"
  //           name="password"
  //           placeholder="Password"
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //         <button type="submit">Login</button>
  //       </form>
  //     </div>
  //   </>
  // );
};

export default Login;
