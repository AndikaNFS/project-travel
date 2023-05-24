import React from "react";
import "../assets/css/login.css";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";

function LoginSignUp() {
  const { email, setEmail, password, setPassword, handleSubmit } = Login();
  const {
    username,
    setUsername,
    emailRegister,
    setEmailRegister,
    passwordRegister,
    setPasswordRegister,
    handleSubmitRegister,
  } = Register();

  return (
    <>
      <div className="body">
        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div class="signup">
            <form action="" onSubmit={handleSubmitRegister}>
              <label for="chk" aria-hidden="true">
                Sign Up
              </label>
              <input
                type="text"
                name="txt"
                placeholder="User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={emailRegister}
                onChange={(e) => setEmailRegister(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={passwordRegister}
                onChange={(e) => setPasswordRegister(e.target.value)}
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>

          <div class="login">
            <form onSubmit={handleSubmit}>
              <label for="chk" aria-hidden="true">
                Login
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
    // <div className="main">
    //   <input type="checkbox" id="chk" aria-hidden="true" />
    //   <Register />
    //   <Login />
    // </div>
  );
}

export default LoginSignUp;
