import React, { useState } from 'react';
import { setResetPassword } from '../services/auth';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  let { id, token } = useParams();

  console.log(id);
  console.log(token);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = {
      _id: id,
      password: password,
      token: token,
    };
    if (!password) {
      alert('Masukan password baru anda!');
    } else {
      const responsePassword = await setResetPassword(data);
      alert(responsePassword.message);
      navigate('/');
    }
  };
  return (
    <div className="container flex flex-col items-center justify-center w-full h-screen mx-auto bg-slate-white">
      <div className="flex flex-col w-full max-w-lg bg-gray-200">
        <h1 className="py-3 mb-4 text-center text-blue-600 bg-blue-300">
          Reset Password
        </h1>
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-col gap-2 px-4">
            <p>Reset</p>
            <input
              type="text"
              placeholder="Masukan password baru"
              className="max-w-md px-2 py-2 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="p-3 mx-auto mt-2 mb-4 text-white bg-blue-700 rounded-lg w-28"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
