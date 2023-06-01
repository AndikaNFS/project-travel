import React, { useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Auth from './Auth';

const Navbar = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add('h-20', 'bg-secondary-color-2');
        headerRef.current.classList.remove('h-32');
      } else {
        headerRef.current.classList.add('h-32');
        headerRef.current.classList.remove('h-20', 'bg-secondary-color-2');
      }
    };
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="fixed top-0 left-0 z-50 w-full h-32 transition-colors duration-300 ease-in-out"
    >
      <>
        <div className="container flex flex-row items-center justify-center h-full px-6 mx-auto md:justify-between">
          <Link to={'/'} className="flex flex-row items-center gap-2">
            <img src="/images/img-logo-travee.png" />
          </Link>
          <div className="flex flex-row items-center gap-8 text-2xl font-bold capitalize max-md:hidden">
            {['home', 'dashboard'].map((item) => (
              <NavLink
                key={item}
                to={`/${item}` === '/home' ? '/' : `/${item}`}
                className={({ isActive }) =>
                  isActive ? 'text-text-color-2' : 'text-text-color-1'
                }
              >
                {item === 'tv' ? 'TV Series' : item}
              </NavLink>
            ))}
            <Auth />
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
