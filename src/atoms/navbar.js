// import React, { useState } from 'react';
import styles from './navbar.module.css';
import img1 from "./images/business logo.jpg"
import {FiMenu, FiX} from 'react-icons/fi'
import { useState } from 'react';
import{useNavigate} from 'react-router-dom'


function Navbar() {
    const nevigate=useNavigate()
    const[open,setOpen]=useState(false)
    const handleClick=()=>setOpen(!open);

    const hadleHome=()=>{
      nevigate('/')
    }
    const hadleProduct=()=>{
      nevigate('/product')
    }
    const hadleNewLaunch=()=>{
      nevigate('/Newproduct')
    }
    const hadleContact=()=>{
      nevigate('/Contact')
    }
 
  return (
    <nav className={styles.navbar}>
    <img src={img1} className={styles.img}></img>
     <div onClick={handleClick} className={styles.nav_icons}>
        {open ? <FiX/>:<FiMenu/>}
     </div>
   
      <ul className={`${styles.nav_links} ${open ? styles.nav_linksactive : styles.nav_links}`}>
        <li onClick={hadleHome} className={styles.nav_list}>Home</li>
        <li onClick={hadleProduct} className={styles.nav_list}>Products</li>
        <li onClick={hadleNewLaunch} className={styles.nav_list}>New Launches</li>
        <li onClick={hadleContact} className={styles.nav_list}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;