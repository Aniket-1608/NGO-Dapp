import { userNavData } from "../lib/navData";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidenav.module.css";

export default function SidenavUser() {
    const [open, setOpen] = useState(true);
    
    const toggleOpen = () => {
        setOpen(!open)
    }
    
    return (
        <div className={open?styles.sidenav:styles.sidenavClosed}>
            <button className={styles.menuBtn} onClick={toggleOpen}>
                    {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
            </button>
            {userNavData.map(item =>{
                return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                        {item.icon}
                        <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
                    </NavLink>
            })}
        </div>
    )
}