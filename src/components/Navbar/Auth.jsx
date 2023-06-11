import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { HiX } from 'react-icons/hi';

const Auth = ({ mobile }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState([]);
  const [dropdownProfile, setDropdownProfile] = useState(false);
  const [sidebarMobile, setSidebarMobile] = useState(false);
  const avatarUser = `${process.env.REACT_APP_API_IMG}/${user.avatar}`;

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

  return isLogin == true ? (
    <>
      {!mobile ? (
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
            <div className="relative">
              <span
                className="uppercase cursor-pointer"
                onClick={() => setDropdownProfile(true)}
              >
                {user.name.slice(0, 2)}
              </span>
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
          )}
        </>
      ) : (
        <>
          {user.avatar !== undefined ? (
            <>
              <div className="relative">
                <img
                  src={avatarUser}
                  className="w-10 h-10 rounded-full"
                  onClick={() => setSidebarMobile(true)}
                />
                {sidebarMobile && (
                  <div className="fixed inset-y-0 left-0 flex flex-col items-end w-3/4 px-4 pt-4 bg-red-500 gap-y-6">
                    <HiX onClick={() => setSidebarMobile(false)} />
                    <Link to="/profile">Profile</Link>
                    <Link to={`/dashboard`}>Dashboard</Link>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="relative">
              <span
                className="uppercase cursor-pointer"
                onClick={() => setSidebarMobile(true)}
              >
                {user.name.slice(0, 2)}
              </span>
              {sidebarMobile && (
                <div className="fixed inset-y-0 left-0 flex flex-col items-end w-3/4 px-4 pt-4 bg-red-500 gap-y-6">
                  <HiX onClick={() => setSidebarMobile(false)} />
                  <Link to="/profile">Profile</Link>
                  <Link to={`/dashboard`}>Dashboard</Link>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  ) : (
    <>
      {!mobile ? (
        <div className="flex flex-row gap-x-4 ">
          {['sign-in', 'sign-up'].map((item) => (
            <Link
              to={`/${item}`}
              key={item}
              className={` py-2 px-5 rounded-xl text-base ${
                item === 'sign-in'
                  ? ' text-text-color-1 bg-secondary-color-3 border border-secondary-color-1'
                  : 'text-text-color-3 bg-secondary-color-1'
              }`}
            >
              {item === 'sign-in' ? 'Masuk' : 'Daftar'}
            </Link>
          ))}
        </div>
      ) : (
        <Link to={`/sign-in`} className="px-2 py-1 border">
          Masuk
        </Link>
      )}
    </>
  );
};

export default Auth;
