import React from "react";
import "../assets/css/login.css";

function LoginSignUp() {
  return (
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div class="signup">
        <form action="">
          <label for="chk" aria-hidden="true">
            Sign Up
          </label>
          <input type="text" name="txt" placeholder="User name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pwsd"
            placeholder="Password"
            required=""
          />
          <button>Sign Up</button>
        </form>
      </div>

      <div class="login">
        <form action="">
          <label for="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pwsd"
            placeholder="Password"
            required=""
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginSignUp;
