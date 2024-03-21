import { Button } from '@mui/material';
import { menuItems, menuItemsAdmin, menuItemsCommittee, menuItemsGovernment, menuItemsUser} from '../lib/menuItems';
import MenuItems from './MenuItems';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUser  } from './MyContext';


const Navbar = () => {

  const location = useLocation();
  // console.log(location.pathname);
  const [navItems, setNavItems] = useState(menuItems);
  // const [customer, setCustomer] = useState('start')

  const saveDataToLocalStorage = (key, data) => {
    try {
      // Convert data to JSON string before saving
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      // Handle errors, such as quota exceeded
      console.error('Error saving data to localStorage:', error);
    }
  };

  const readDataFromLocalStorage = (key) => {
    try {
      // Retrieve data from localStorage and parse JSON string
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return null; // Return null if key does not exist
      }
      return JSON.parse(serializedData);
    } catch (error) {
      // Handle errors, such as invalid JSON
      console.error('Error reading data from localStorage:', error);
      return null;
    }
  };

  useEffect(() => {
    if(location.pathname==='/loginasuser')
    {
      const userData = { role : "user" };
      saveDataToLocalStorage('user', userData);
    }
    if(location.pathname==='/loginascommitteemember')
    {
      const userData = { role : "committee member" };
      saveDataToLocalStorage('user', userData);
    }
    if(location.pathname==='/loginasadmin')
    {
      const userData = { role : "admin" };
      saveDataToLocalStorage('user', userData);
    }
    if(location.pathname==='/loginasgovernment')
    {
      const userData = { role : "government" };
      saveDataToLocalStorage('user', userData);
    }
    if(location.pathname === '/')
    {
      const userData = null;
      saveDataToLocalStorage('user', userData);
    }
  },[location.pathname])

  useEffect(() => {
    const userData = readDataFromLocalStorage('user');
    if (userData === null) {
      setNavItems(menuItems);
      return;
    }
    else{
      switch (userData.role) {
        case 'user':
          setNavItems(menuItemsUser);
          break;
        case 'admin':
          setNavItems(menuItemsAdmin);
          break;
        case 'committee member':
          setNavItems(menuItemsCommittee);
          break;
        case 'government':
          setNavItems(menuItemsGovernment);
          break;
        default:
          setNavItems(menuItems);
      }
    }
  }, [location.pathname]);
  
  // useEffect(()=>{
  //   const userData = readDataFromLocalStorage('user');
  //   console.log(userData);
  //   if(userData === null)
  //   {
  //     setNavItems(menuItems);
  //   }
  //   if(userData!==null && userData.role==='user')
  //   {
  //     setNavItems(menuItemsUser)
  //   }
  //   if(userData!==null && userData.role==='admin')
  //   {
  //     setNavItems(menuItemsAdmin);
  //   } 
  //   if(userData!==null && userData.role==='committee member')
  //   {
  //     setNavItems(menuItemsCommittee);
  //   } 
  //   if(userData!==null && userData.role==='government')
  //   {
  //     setNavItems(menuItemsGovernment);
  //   } 
  //   if(location.pathname=='/')
  //   {
  //     setNavItems(menuItems)
  //   }
  // }, [location.pathname])

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
