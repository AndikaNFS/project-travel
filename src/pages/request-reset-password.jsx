import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { setRequestResetPassword, getEmail } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const RequestResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState([]);
  const navigate = useNavigate();

  //   const getEmailList = useCallback(async () => {
  //     const data = await getEmail();
  //     setEmailList(data);
  //   }, [getEmail]);

  //   useEffect(() => {

  //     getEmailList();
  //   }, []);

  //   const filterData = emailList.data;

  //   const test = filterData.filter((r) => r.email.includes(email));
  //   console.log(test);

  const onSubmit = async () => {
    const data = {
      email: email,
    };
    if (!email) {
      alert('Masukan email anda!');
    } else {
      const responseEmail = await setRequestResetPassword(data);
      if (responseEmail.error) {
        alert(responseEmail.message);
      } else {
        alert('Request Reset Password Success, Check your email address!');
        navigate('/');
      }
      //   const responseEmail = await setSignIn(data);
      //   if (responseEmail.error) {
      //     alert(responseEmail.message);
      //   } else {
      //     await setRequestResetPassword(data);
      //     alert('Silahkan check email anda!');
      //     navigate('/');
      //   }
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center w-full h-screen mx-auto bg-slate-white">
      <div className="flex flex-col w-full max-w-lg bg-gray-200">
        <h1 className="py-3 mb-4 text-center text-blue-600 bg-blue-300">
          Request Reset Password
        </h1>
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-col gap-2 px-4">
            <p>Email</p>
            <input
              type="text"
              placeholder="Masukan email anda"
              className="max-w-md px-2 py-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default RequestResetPassword;
