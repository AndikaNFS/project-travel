import React, { useState } from 'react';
import { setRequestResetPassword } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RequestResetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = {
      email: email,
    };
    if (!email) {
      toast.error('Masukan email anda!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      const responseEmail = await setRequestResetPassword(data);
      if (responseEmail.error) {
        toast.info(responseEmail.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else {
        toast.success(
          'Request Reset Password Success, Check your email address!',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          },
        );
        navigate('/');
      }
    }
  };

  return (
    <div className="fixed flex flex-col items-center justify-center w-full h-screen gap-12 px-6 bg-primary-color-1">
      <div className="flex flex-col gap-5 text-center">
        <Link to={'/'}>
          <img
            src="/images/img-logo-travee.png"
            alt=""
            className="mx-auto w-44 mb-14"
          />
        </Link>
        <h1 className="font-extrabold xl:text-3xl">Forgot your password?</h1>
        <h2 className="max-w-lg font-normal text-center text-text-color-3">
          Don’t worry! Enter the email address you’re using for your account
          below and we will send you a password reset link.
        </h2>
      </div>
      <div className="flex flex-col w-full max-w-md gap-7">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-start xl:text-lg">Email Address</h3>
          <input
            type="email"
            value={email}
            className="w-full border-none outline-none rounded-xl bg-secondary-color-3 focus:outline-none focus:ring-1 focus:ring-primary-color-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="w-full py-2 bg-primary-color-2 rounded-xl text-secondary-color-3"
          onClick={onSubmit}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default RequestResetPassword;
