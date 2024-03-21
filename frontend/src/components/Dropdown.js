import { useContext, useState } from 'react';
import MenuItems from './MenuItems';
// import { MyContext } from './MyContext';
// import { title } from 'process';

const Dropdown = ({ submenus, dropdown, depthLevel, onSubmenuItemClicked}) => {

  // const {userRole, setUserRole} = useContext(MyContext);

  depthLevel = depthLevel + 1;
  const [selectedItem, setSelectedItem] = useState(null);
  // const handleSubmenuItemClicked = (title) => {
  //   setSelectedItem(title); // Update the selected submenu item
  //   onSubmenuItemClicked(title);
  // };

  const handleClick = (title) => {
    // setUserRole(title)
  }

  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  return (
    <ul
      className={`dropdown ${dropdownClass} ${
        dropdown ? 'show' : ''
      }`}
    >
    
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
          // selectedItem={selectedItem} // Pass the selected submenu item as a prop to MenuItems
          // onSubmenuItemClicked={handleSubmenuItemClicked} // Pass the click handler to MenuItems
          onClick={handleClick(submenu.title)}
        />
      ))}
     
    </ul>
  );
};

export default Dropdown;
  
  