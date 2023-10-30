import { useState } from "react";

const Dropdown = ({ title, submenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () =>{
        setIsOpen(!isOpen);
    };
    return (
      <div className="dropdown">
        <a href={title}>{title}</a>
        <button type="button" aria-haspopup="menu" onClick={toggleDropdown}>
            ▼
        </button>
        {isOpen && (
            <ul>
                {submenu.map((item, index) => (
                    <li key={index} className="menu-items">
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        )}
      </div>

    );
  };
  
  export default Dropdown;