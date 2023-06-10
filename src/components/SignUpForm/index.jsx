import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setSignUp } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUpForm = () => {
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
      toast.error('Masukan nama, email dan email anda!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (!name) {
      toast.error('Masukan nama lengkap anda!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (!email) {
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
    } else if (!password) {
      toast.error('Masukan password anda!', {
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
      const response = await setSignUp(data);
      if (response.error) {
        toast.info(response.message, {
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
        toast.success('Sign Up Success!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        navigate('/sign-in');
      }
    }
  };

  return (
    <div className="fixed flex flex-col w-full h-full md:flex-row md:h-full">
      <div className="flex flex-col items-center gap-3 pb-6 pt-9 bg-primary-color-2 md:justify-between md:pb-24 md:pt-20 md:w-2/5 xl:gap-28 xl:pt-16 xl:pb-24">
        <div className="md:px-4 md:space-y-6 xl:px-14 xl:space-y-14">
          <Link to={`/`}>
            <img src="/images/img-logo-travee.png" />
          </Link>
          <p className="font-bold max-md:hidden md:text-xl xl:text-2xl">
            Get reliable and accurate travel information all on one site.{' '}
          </p>
        </div>
        <img src="/images/img-sign-in2.png" className="xl:w-[525px]" />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full md:w-3/5 bg-primary-color-1">
        <div className="flex flex-col items-center w-full max-w-md pt-5 px-11 md:px-0 md:pt-0 ">
          <h1 className="pb-2 text-2xl font-extrabold xl:text-2xl">
            Sign Up to Travee
          </h1>
          <div className="flex flex-col items-start w-full gap-4 md:justify-center">
            <div className="flex flex-col w-full gap-1">
              <h2 className="text-base font-semibold ">Nama Lengkap</h2>
              <input
                type="text"
                placeholder="Masukan nama lengkap anda"
                className="w-full border-none outline-none rounded-xl bg-secondary-color-3 focus:outline-none focus:ring-1 focus:ring-primary-color-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <h2 className="text-base font-semibold ">Email</h2>
              <input
                type="email"
                placeholder="Masukan email anda"
                className="w-full border-none outline-none rounded-xl bg-secondary-color-3 focus:outline-none focus:ring-1 focus:ring-primary-color-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <h2 className="text-base font-semibold ">Password</h2>
              <input
                type="password"
                placeholder="Masukan password anda"
                className="w-full border-none outline-none rounded-xl bg-secondary-color-3 focus:outline-none focus:ring-1 focus:ring-primary-color-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={onSubmit}
            className="w-full py-2 my-4 bg-primary-color-2 rounded-xl text-secondary-color-3"
          >
            Sign Up
          </button>
          <p className="text-sm font-normal text-center text-text-color-3">
            Already a member?
            <Link
              to={'/sign-in'}
              className="font-semibold underline text-primary-color-2"
            >
              {' '}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
// };

export default SignUpForm;
