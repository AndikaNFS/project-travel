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
    <div className="container flex flex-col justify-center w-full h-screen mx-auto">
      <div className="flex justify-center w-full h-2/3">
        <img
          src="/images/sign.jpeg"
          alt=""
          className="relative z-0 h-full w-96 left-3"
        />
        <div className="z-10 w-full max-w-lg bg-gray-300 rounded-s-xl ">
          <div className="mt-10">
            <h1 className="top-0 py-3 mb-4 font-sans text-3xl font-semibold text-center text-gray-700 ">
              Sign In
            </h1>
            <div className="flex justify-between w-full p-3">
              {/* <div className="flex bg-white"> */}
              <div className="inline-flex items-center p-2 ring-1 ring-slate-400 rounded-xl">
                <img
                  src="/images/icon-google.svg"
                  alt=""
                  className="w-6 h-6 mr-2"
                />
                <span>Sign up with Google</span>
              </div>
              <div className="inline-flex items-center p-2 ring-1 ring-slate-400 rounded-xl">
                <img
                  src="/images/icon-facebook.png"
                  alt=""
                  className="w-6 h-6 mr-2"
                />
                <span>Sign up with Facebook</span>
              </div>
              {/* </div> */}
            </div>
            <span className="flex justify-center mb-4 text-sm text-gray-600">
              -OR-
            </span>
            <div className="">
              <div className="px-4">
                {/* <span className="">Email</span> */}
                <input
                  type="text"
                  placeholder="Masukan email anda"
                  className="max-w-md px-2 py-2 rounded-md w-80 h-9"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="px-4 ">
                {/* <p>Password</p> */}
                <input
                  type="password"
                  placeholder="Enter password"
                  className="max-w-md px-2 py-2 rounded-md w-80 h-9"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="p-3 mx-auto mt-4 mb-4  flex items-center text-gray-700 bg-[#D5DFF6] rounded-lg w-64"
              onClick={onSubmit}
            >
              Sign In
            </button>
            <Link
              to="/sign-up"
              className="mx-auto mb-4 ml-4 text-blue-600 underline underline-offset-4"
            >
              Belum Punya Akun
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
// };

export default SignInForm;
