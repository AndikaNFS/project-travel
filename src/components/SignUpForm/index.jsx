import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setSignUp } from "../../services/auth";
import { useNavigate } from "react-router-dom";
// import "";

<<<<<<< HEAD:src/components/SignUp/index.jsx
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
=======
const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
>>>>>>> 21a1fc7b18727caef758e9cd1dc17a84eff0f7c3:src/components/SignUpForm/index.jsx
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
    <div className="container flex flex-col items-center justify-center w-full h-screen mx-auto bg-slate-white">
      <div className="flex w-full justify-center h-2/3">
        <img
          src="/images/sign.jpg"
          alt=""
          className="h-full w-96 relative left-3 z-0"
        />
        <div className="flex flex-col justify-center w-full max-w-lg bg-gray-300 rounded-s-xl z-10">
          <h1 className="py-3 mb-4 top-0 text-center text-3xl font-sans font-semibold text-gray-700">
            Create Account
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
          <span className="text-lg text-gray-700 flex justify-center mb-4">
            -OR-
          </span>
          <div className="flex justify-center">
            <div className="flex flex-col gap-2 px-4">
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
          <div className="flex justify-center mt-4">
            <div className="flex flex-col gap-2 px-4">
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
          <div className="flex justify-center mt-4">
            <div className="flex flex-col gap-2 px-4">
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
            className="p-3 mx-auto mt-4 mb-4  flex items-center text-black bg-[#D5DFF6] rounded-lg w-64"
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
  );
};

export default SignUpForm;
