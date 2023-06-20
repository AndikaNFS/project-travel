import React from 'react';
import SideBar from '../../components/SideBar';

const Transaction = () => {
  return (
    <div className="flex flex-row xl:w-full xl:h-screen xl:fixed bg-secondary-color-3 xl:py-8">
      <SideBar />
      <div className="w-3/4 bg-primary-color-1">
        <h1 className="py-96">Template Transactions</h1>
      </div>
    </div>
  );
};

export default Transaction;
