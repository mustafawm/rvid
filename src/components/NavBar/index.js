import React from 'react';
import url from 'utils/url';
import { NavLink } from 'react-router-dom';

const webRoutes = [];
Object.keys(url.web).forEach((route) => {
  webRoutes.push(url.web[route]);
});

export default function NavBar() {
  const navItems = webRoutes.map((item) => {
    return (
      <NavLink
        end
        key={item.link}
        to={item.link}
        activeClassName="text-blue-800 font-normal"
        className="hover:text-blue-800 "
      >
        {item.display}
      </NavLink>
    );
  });

  return (
    <nav className="flex items-center p-3 font-hairline justify-between w-full sm:w-3/4 lg:w-1/2">
      {navItems}
    </nav>
  );
}
