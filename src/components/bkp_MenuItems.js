import Dropdown from './Dropdown';
import { useState } from 'react';

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false); 
  return (
    <li className="menu-items">
      {items.submenu ? (
        <Dropdown title={items.title} submenu={items.submenu} />
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;