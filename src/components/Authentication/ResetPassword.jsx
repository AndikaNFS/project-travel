import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setSignUp } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import ResetPassword from "../../pages/reset-password";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
      name: name,
    };
    console.log(data);
    if (!name || !password || !name) {
      alert("Masukan nama, password, email anda");
    } else {
      const response = await setSignUp(data);
      if (response.error) {
        alert(response.message);
      } else {
        alert("Sign Up Success!");
        navigate("/sign-in");
      }
    }
  };

  return (
    <div className="container flex items-center justify-center w-full h-screen mx-auto bg-slate-white">
      <div className="">
        <img src="/images/moonton.svg" alt="" />
      </div>
      <div className="flex justify-center w-full h-2/3">
        <div className="z-10 w-full max-w-lg bg-gray-300 rounded-s-xl ">
          <div className="flex-col justify-center mt-4">
            <h1 className="py-3 mb-4 font-sans text-3xl font-semibold text-center text-gray-700">
              Create Account
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
              <div className="gap-2 px-4 ">
                {/* <p>Nama</p> */}
                <input
                  type="text"
                  placeholder="Fullname"
                  className="max-w-md px-2 py-2 rounded-md w-80 h-9"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="justify-center ">
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
            <div className="justify-center ">
              <div className="px-4">
                {/* <p>Password</p> */}
                <input
                  type="password"
                  placeholder="Password"
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
              Create Account
            </button>
            <div className="ml-2">
              <span className="text-sm text-gray-500">
                Already have an account? &nbsp;
              </span>
              <Link
                to="/sign-in"
                className="mx-auto mb-4 text-blue-600 underline underline-offset-4"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// };

export default ResetPassword;
