import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        username,
        emailRegister,
        passwordRegister,
      });
      // Handle successful registration
      // ...
    } catch (error) {
      console.error(error);
      // Handle registration error
    }
  };

  return {
    username,
    setUsername,
    emailRegister,
    setEmailRegister,
    passwordRegister,
    setPasswordRegister,
    handleSubmitRegister,
  };

  // return (
  //   <div>
  //     <div class="signup">
  //       <form action="" onSubmit={handleSubmit}>
  //         <label for="chk" aria-hidden="true">
  //           Sign Up
  //         </label>
  //         <input
  //           type="text"
  //           name="txt"
  //           placeholder="User name"
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //         />
  //         <input
  //           type="email"
  //           name="email"
  //           placeholder="Email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //         <input
  //           type="password"
  //           name="password"
  //           placeholder="Password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //         <button type="submit">Sign Up</button>
  //       </form>
  //     </div>
  //   </div>
  // );
};

export default Register;
