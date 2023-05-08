// import React, { useState } from 'react';
import styles from './navbar.module.css';
import img1 from "./images/business logo.jpg"
import {FiMenu, FiX} from 'react-icons/fi'
import { useState } from 'react';


function Navbar() {
    const[open,setOpen]=useState(false)
    const handleClick=()=>setOpen(!open);

 
  return (
    <nav className={styles.navbar}>
    <img src={img1} className={styles.img}></img>
     <div onClick={handleClick} className={styles.nav_icons}>
        {open ? <FiX/>:<FiMenu/>}
     </div>
   
      <ul className={`${styles.nav_links} ${open ? styles.nav_linksactive : styles.nav_links}`}>
        <li className={styles.nav_list}>Home</li>
        <li className={styles.nav_list}>Products</li>
        <li className={styles.nav_list}>New Launches</li>
        <li className={styles.nav_list}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;