import React, { useCallback, useEffect, useState } from 'react';
import { setRequestResetPassword } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import '../assets/css/login.css';

const RequestResetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = {
      email: email,
    };
    if (!email) {
      alert('Masukan email anda!');
    } else {
      const responseEmail = await setRequestResetPassword(data);
      if (responseEmail.error) {
        alert(responseEmail.message);
      } else {
        alert('Request Reset Password Success, Check your email address!');
        navigate('/');
      }
    }
  };

  return (
    <div style={{ background: '#D3D3D3' }}>
      <div className="container flex items-center justify-center w-full h-screen mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-2/3">
          <div className="mb-4">
            <img
              src="/images/img-logo-travee.png"
              alt=""
              className="h-100 w-100"
            />
          </div>
          <div className="z-10 w-full max-w-lg bg-white rounded-xl ">
            <div className="flex-col justify-center mt-4">
              <h1 className="py-3 mb-4 font-sans text-3xl font-semibold text-center text-gray-700">
                Reset Password
              </h1>
              <div className="flex justify-center">
                <div className="px-4 ">
                  {/* <p>Email</p> */}
                  <input
                    type="text"
                    placeholder="Email"
                    className="max-w-md px-2 py-2 rounded-md w-80 h-9"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="flex justify-center ">
                <div className="px-4">
                  <p>Password</p>
                  <input
                    type="password"
                    placeholder="Password"
                    className="max-w-md px-2 py-2 rounded-md w-80 h-9"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div> */}

              <button
                className="p-3 mx-auto mt-4 mb-4 flex items-center justify-center text-gray-700 bg-[#D5DFF6] rounded-lg w-64"
                onClick={onSubmit}
              >
                Reset Password
              </button>
              {/* <div className="ml-2">
              <span className="text-sm text-gray-500">
                Already have an account? &nbsp;
              </span>
              <Link
                to="/sign-in"
                className="mx-auto mb-4 text-blue-600 underline underline-offset-4"
              >
                Sign In
              </Link>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestResetPassword;
