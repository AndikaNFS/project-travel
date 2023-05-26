// <<<<<<< HEAD:src/components/SignIn/index.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setSignIn } from "../../services/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="container flex flex-col justify-center w-full h-screen mx-auto">
      <div className="flex w-full justify-center h-2/3">
        <img
          src="/images/sign.jpeg"
          alt=""
          className="h-full w-96 relative left-3 z-0"
        />
        <div className="w-full max-w-lg bg-gray-300 rounded-s-xl z-10 ">
          <div className="mt-10">
            <h1 className="py-3 mb-4 top-0 text-center text-3xl font-sans font-semibold text-gray-700 ">
              Sign In
            </h1>
            <div className="flex justify-between w-full p-3">
              {/* <div className="flex bg-white"> */}
              <div className="inline-flex items-center ring-1 ring-slate-400 p-2 rounded-xl">
                <img
                  src="/images/icon-google.svg"
                  alt=""
                  className="h-6 w-6 mr-2"
                />
                <span>Sign up with Google</span>
              </div>
              <div className="inline-flex items-center ring-1 ring-slate-400 p-2 rounded-xl">
                <img
                  src="/images/icon-facebook.png"
                  alt=""
                  className="mr-2 h-6 w-6"
                />
                <span>Sign up with Facebook</span>
              </div>
              {/* </div> */}
            </div>
            <span className="text-sm text-gray-600 flex justify-center mb-4">
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
              <div className=" px-4">
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
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
// };

export default SignInForm;
