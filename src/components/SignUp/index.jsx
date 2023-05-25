import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setSignUp } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
      name: name,
    };
    console.log(data);
    if (!name || !password || !name) {
      alert('Masukan nama, password, email anda');
    } else {
      const response = await setSignUp(data);
      if (response.error) {
        alert(response.message);
      } else {
        alert('Sign Up Success!');
        navigate('/sign-in');
      }
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center w-full h-screen mx-auto bg-slate-white">
      <div className="flex flex-col w-full max-w-lg bg-gray-200">
        <h1 className="py-3 mb-4 text-center text-blue-600 bg-blue-300">
          Sign Up
        </h1>
        <div className="flex flex-col gap-2 px-4">
          <p>Nama</p>
          <input
            type="text"
            placeholder="Masukan nama anda"
            className="max-w-md px-2 py-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            placeholder="Masukan password anda"
            className="max-w-md px-2 py-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="p-3 mx-auto mt-2 mb-4 text-white bg-blue-700 rounded-lg w-28"
          onClick={onSubmit}
        >
          Daftar
        </button>
        <Link
          to="/sign-in"
          className="mx-auto mb-4 text-blue-600 underline underline-offset-4"
        >
          Sudah Punya Akun
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
