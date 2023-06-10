import React, { useState } from 'react';
import { setResetPassword } from '../services/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  let { id, token } = useParams();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = {
      _id: id,
      password: password,
      token: token,
    };
    const responsePassword = await setResetPassword(data);
    console.log(responsePassword);
    if (!password && !confirmPassword) {
      toast.error('Masukan password dan konfirmasi password!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (!password) {
      toast.error('Masukan password terbaru!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (!confirmPassword) {
      toast.error('Masukan konfirmasi password!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (password !== confirmPassword) {
      toast.error('Password yang dimasukan tidak sesuai!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (
      responsePassword.error &&
      responsePassword.message == undefined
    ) {
      toast.info('expired verification link', {
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
      toast.success(responsePassword.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
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
        <h1 className="font-extrabold xl:text-3xl">Input new password!</h1>
        <h2 className="max-w-lg font-normal text-center text-text-color-3">
          Enter the password you used for your account below and we will store
          the most recent password.
        </h2>
      </div>
      <div className="flex flex-col w-full max-w-md gap-7">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-start xl:text-lg">
            Reset Password
          </h3>
          <input
            type="password"
            value={password}
            className="w-full border-none outline-none rounded-xl bg-secondary-color-3 focus:outline-none focus:ring-1 focus:ring-primary-color-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-start xl:text-lg">
            Confirm new password
          </h3>
          <input
            type="password"
            value={confirmPassword}
            className="w-full border-none outline-none rounded-xl bg-secondary-color-3 focus:outline-none focus:ring-1 focus:ring-primary-color-2"
            onChange={(e) => setConfirmPassword(e.target.value)}
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

export default ResetPassword;
