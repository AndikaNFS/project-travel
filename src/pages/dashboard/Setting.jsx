import React from 'react';
import SideBar from '../../components/SideBar';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const Setting = () => {
  useEffect(() => {
    const token = Cookies.get('token');
    const jwtToken = atob(token);
    const payload = jwtDecode(jwtToken);
    console.log(payload);
  }, []);
  return (
    <div className="flex flex-row xl:w-full xl:h-screen xl:fixed bg-secondary-color-3 xl:py-8">
      <SideBar />
      <div className="w-3/4 bg-primary-color-1">
        <h1 className="py-96">Template Settings</h1>
      </div>
    </div>
  );
};

export default Setting;
