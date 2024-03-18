import { Button } from '@mui/material';
import { menuItems, menuItemsAdmin, menuItemsCommittee, menuItemsGovernment, menuItemsUser} from '../menuItems';
import MenuItems from './MenuItems';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const Navbar = () => {

  const location = useLocation();
  const [navItems, setNavItems] = useState(menuItems);

  useEffect(() => {
    // Update navItems based on the current route
    if (location.pathname === '/loginasuser') {
      setNavItems(menuItemsUser);
    }
    else if(location.pathname === '/loginascommitteemember') {
      setNavItems(menuItemsCommittee)
    } 
    else if (location.pathname === '/loginasadmin') {
      setNavItems(menuItemsAdmin);
    }
    else if(location.pathname === '/loginasgovernment') {
      setNavItems(menuItemsGovernment)
    } else {
      setNavItems(menuItems);
    }
  }, [location.pathname]);
  return (
    <nav>
      <ul className="menus">
        {navItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
