<<<<<<< HEAD:src/components/SignIn/index.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setSignIn } from "../../services/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { setSignIn } from '../../services/auth';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
>>>>>>> 21a1fc7b18727caef758e9cd1dc17a84eff0f7c3:src/components/SignInForm/index.jsx
  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      alert("Masukan email dan password");
    }
    const response = await setSignIn(data);
    if (response.error) {
      alert(response.message);
    } else {
      alert("Login Berhasil");
      const token = response.data.token;
      const tokenBase64 = btoa(token);
      Cookies.set("token", tokenBase64, { expires: 1 });
      navigate("/home");
    }
  };
  return (
    <div className="container flex flex-col items-center justify-center w-full h-screen mx-auto">
      <div className="flex w-full justify-center h-2/3">
        <img
          src="/images/sign.jpeg"
          alt=""
          className="h-full w-96 relative left-3 z-0"
        />
        <div className="flex flex-col justify-center w-full max-w-lg bg-gray-300 rounded-s-xl z-10 ">
          <h1 className="py-3 mb-4 top-0 text-center text-3xl font-sans font-semibold text-blue-500 ">
            Sign In
          </h1>
          <div className="flex justify-center ">
            <div className="flex flex-col gap-2 px-4">
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
          <div className="flex justify-center mt-4">
            <div className="flex flex-col gap-2 px-4">
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
            className="p-3 mx-auto mt-4 mb-4 flex items-center text-white bg-blue-700 rounded-lg w-28"
            onClick={onSubmit}
          >
            Masuk
          </button>
          <Link
            to="/sign-up"
            className="mx-auto mb-4 text-blue-600 underline underline-offset-4"
          >
            Belum Punya Akun
          </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
