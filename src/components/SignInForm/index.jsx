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
    const response = await setSignIn(data);

    if (!email && !password) {
      alert('Masukan email dan password');
    } else if (!email) {
      alert('Masukan email anda!');
    } else if (!password) {
      alert('Masukan password anda!');
    } else if (response.error) {
      alert(response.message);
    } else {
      alert('Login Berhasil');
      const token = response.data.token;
      const tokenBase64 = btoa(token);
      Cookies.set('token', tokenBase64, { expires: 1 });
      navigate('/');
    }
  };
  return (
    // <div className="container flex flex-col justify-center w-full h-screen mx-auto">
    //   <div className="flex justify-center w-full h-2/3">
    //     <img
    //       src="/images/sign-2.jpg"
    //       alt=""
    //       className="relative z-0 h-full w-96 left-3"
    //     />
    //     <div className="z-10 w-full max-w-lg bg-white rounded-s-xl ">
    //       <div className="mt-10">
    //         <h1 className="top-0 py-3 mb-4 font-sans text-3xl font-semibold text-center text-gray-700 ">
    //           Sign In
    //         </h1>
    //         <div className="flex justify-between w-full p-3">
    //           {/* <div className="flex bg-white"> */}
    //           <div className="inline-flex items-center p-2 ring-1 ring-slate-400 rounded-xl">
    //             <img
    //               src="/images/icon-google.svg"
    //               alt=""
    //               className="w-6 h-6 mr-2"
    //             />
    //             <span>Sign up with Google</span>
    //           </div>
    //           <div className="inline-flex items-center p-2 ring-1 ring-slate-400 rounded-xl">
    //             <img
    //               src="/images/icon-facebook.png"
    //               alt=""
    //               className="w-6 h-6 mr-2"
    //             />
    //             <span>Sign up with Facebook</span>
    //           </div>
    //           {/* </div> */}
    //         </div>
    //         <span className="flex justify-center mb-4 text-sm text-gray-600">
    //           -OR-
    //         </span>
    //         <div className="flex flex-col items-center">
    //           <div className="px-4 ">
    //             {/* <span className="">Email</span> */}
    //             <input
    //               type="text"
    //               placeholder="Masukan email anda"
    //               className="flex max-w-md px-2 py-2 rounded-md w-80 h-9"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>
    //           <div className="px-4 mt-4">
    //             {/* <p>Password</p> */}
    //             <input
    //               type="password"
    //               placeholder="Enter password"
    //               className="max-w-md px-2 py-2 rounded-md w-80 h-9"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //         <button
    //           className="p-3 mx-auto mt-4 mb-4  flex items-center justify-center text-gray-700 bg-[#D5DFF6] rounded-lg w-64"
    //           onClick={onSubmit}
    //         >
    //           Sign In
    //         </button>
    //         <Link
    //           to="/sign-up"
    //           className="mx-auto mb-4 ml-4 text-sm text-blue-600 underline underline-offset-4"
    //         >
    //           Belum Punya Akun ?
    //         </Link>
    //         <Link
    //           to="/request-reset-password"
    //           className="mx-auto mb-4 ml-4 text-sm text-blue-600 underline underline-offset-4"
    //         >
    //           Lupa Password?
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="fixed flex flex-col w-full md:flex-row md:h-full">
      <div className="flex flex-col items-center gap-3 pb-6 pt-9 bg-primary-color-2 md:justify-between md:pb-24 md:pt-20 md:w-2/5 xl:gap-28 xl:pt-16 xl:pb-24">
        <div className="md:px-4 md:space-y-6 xl:px-14 xl:space-y-14">
          <Link to={`/`}>
            <img src="/images/img-logo-travee.png" />
          </Link>
          <p className="font-bold max-md:hidden md:text-xl xl:text-2xl">
            Get reliable and accurate travel information all on one site.{' '}
          </p>
        </div>

        <img src="/images/img-sign-in.png" className="xl:w-[525px]" />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-3/5">
        <div className="flex flex-col items-center w-full max-w-md pt-5 px-11 md:px-0 md:pt-0 ">
          <h1 className="pb-2 text-2xl font-extrabold xl:text-2xl">
            Sign In to Travee
          </h1>
          <div className="flex flex-col items-start w-full gap-4 md:justify-center">
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
          <Link
            to={'/request-reset-password'}
            className="w-full mt-1 mb-3 text-xs text-end text-primary-color-2 "
          >
            Forget Password?
          </Link>
          <div className="flex flex-col w-full gap-5">
            <button
              onClick={onSubmit}
              className="w-full py-2 bg-primary-color-2 rounded-xl text-secondary-color-3"
            >
              Sign In
            </button>
            <button className="flex flex-row items-center justify-center gap-1 py-1 text-sm font-normal border text-text-color-1 rounded-xl">
              <img src="/images/icon-google.svg" className="w-3 h-3" />
              Sign In with Google
            </button>
            <p className="text-sm font-normal text-center text-text-color-3">
              Not a member yet?
              <Link
                to={'/sign-up'}
                className="font-semibold underline text-primary-color-2"
              >
                {' '}
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
// };

export default SignInForm;
