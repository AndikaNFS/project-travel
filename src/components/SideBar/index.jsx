import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = () => {
  const sideBarItems = [
    {
      name: 'dashboard',
      img: '/icon/ic-Dashboard.svg',
      imgActive: '/icon/ic-DashboardActive.svg',
    },
    {
      name: 'tickets',
      img: '/icon/ic-Ticket.svg',
      imgActive: '/icon/ic-TicketActive.svg',
    },
    {
      name: 'favorites',
      img: '/icon/ic-Favorite.svg',
      imgActive: '/icon/ic-FavoriteActive.svg',
    },
    {
      name: 'transactions',
      img: '/icon/ic-Transaction.svg',
      imgActive: '/icon/ic-TransactionActive.svg',
    },
    {
      name: 'settings',
      img: '/icon/ic-Setting.svg',
      imgActive: '/icon/ic-SettingActive.svg',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between w-1/4 xl:py-9">
      <div className="flex flex-col gap-24">
        <Link to={'/'} className="w-36">
          <img src="/images/img-logo-travee.png" />
        </Link>
        <div className="flex flex-col xl:gap-7 xl:w-48">
          {sideBarItems.map((item) => (
            <NavLink
              to={`/${
                item.name === 'dashboard'
                  ? 'dashboard'
                  : `dashboard/${item.name}`
              }`}
              end
            >
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? 'flex flex-row rounded-xl xl:gap-4 xl:p-4 xl:text-lg font-bold bg-primary-color-2 capitalize'
                      : 'flex flex-row xl:gap-4 xl:p-4 xl:text-lg font-bold capitalize'
                  }
                >
                  <img src={isActive ? item.imgActive : item.img} />
                  <span
                    className={isActive ? 'text-white' : 'text-text-color-3'}
                  >
                    {item.name === 'ticket' ? 'My Ticket' : item.name}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      <Link className="flex flex-row items-center font-bold xl:p-4 xl:gap-8 xl:w-48 text-text-color-3">
        <img
          src="/icon/ic-logout.svg"
          className="xl:w-7 xl:h-7 fill-blue-400"
        />
        Log Out
      </Link>
    </div>
  );
};

export default SideBar;
