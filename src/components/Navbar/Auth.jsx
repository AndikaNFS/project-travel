import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState([]);
  const [dropdownProfile, setDropdownProfile] = useState(false);
  const avatarUser = `${process.env.REACT_APP_API_IMG}/${user.avatar}`;
  console.log(user);
  console.log(avatarUser);

  const onSignOut = () => {
    Cookies.remove('token');
    navigate('/');
    setIsLogin(false);
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const useFromPayload = payload.user;
      setUser(useFromPayload);
      setIsLogin(true);
    }
  }, []);
  console.log(user.avatar);
  return isLogin == true ? (
    <>
      {user.avatar !== undefined ? (
        <div className="relative">
          <img
            src={avatarUser}
            className="w-10 h-10 rounded-full"
            onClick={() => setDropdownProfile(true)}
          />
          {dropdownProfile && (
            <div
              className="absolute right-0 bg-primary-color-1 w-52 -bottom-20"
              onMouseLeave={() => setDropdownProfile(false)}
            >
              <div className="flex flex-col ">
                <Link to={`/dashboard`}>Dashboard</Link>
                <span onClick={onSignOut} className="cursor-pointer">
                  Sign Out
                </span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <h1>text</h1>
      )}
    </>
  ) : (
    <div className="flex flex-row gap-x-4 ">
      {['sign-in', 'sign-up'].map((item) => (
        <Link
          to={`/${item}`}
          className={` py-2 px-5 rounded-xl text-base ${
            item === 'sign-in'
              ? ' text-text-color-1 bg-secondary-color-3 border border-secondary-color-1'
              : 'text-text-color-3 bg-primary-color-1'
          }`}
        >
          {item === 'sign-in' ? 'Masuk' : 'Daftar'}
        </Link>
      ))}
    </div>
  );
};

export default Auth;
