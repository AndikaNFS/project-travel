import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { setSignIn } from '../../services/auth';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      alert('Masukan email dan password');
    }
    const response = await setSignIn(data);
    if (response.error) {
      alert(response.message);
    } else {
      alert('Login Berhasil');
      const token = response.data.token;
      const tokenBase64 = btoa(token);
      Cookies.set('token', tokenBase64, { expires: 1 });
      navigate('/home');
    }
  };
  return (
    <div className="container flex flex-col items-center justify-center w-full h-screen mx-auto bg-slate-white">
      <div className="flex flex-col w-full max-w-lg bg-gray-200">
        <h1 className="py-3 mb-4 text-center text-blue-600 bg-blue-300">
          Sign In
        </h1>
        <div className="flex flex-col gap-2 px-4">
          <p>Email</p>
          <input
            type="text"
            placeholder="Masukan email anda"
            className="max-w-md px-2 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 px-4">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter password"
            className="max-w-md px-2 py-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="p-3 mx-auto mt-2 mb-4 text-white bg-blue-700 rounded-lg w-28"
          onClick={onSubmit}
        >
          Masuk
        </button>
        <Link
          to="/register"
          className="mx-auto mb-4 text-blue-600 underline underline-offset-4"
        >
          Belum Punya Akun
        </Link>
        <Link
          to="/request-reset-password"
          className="mx-auto mb-4 text-blue-600 underline underline-offset-4"
        >
          Lupa Password
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
