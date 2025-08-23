import React from 'react';
import { Outlet } from 'react-router'
import Navbar from '../navbar/navbar';
import EarningsPopup from '../earningsPopup/earningsPopup';
import License from '../license/license';

import "./layout.scss"

const Layout = () => {

  return (
    <div className='layout'>
       <Navbar/>  
        <EarningsPopup/>
        <Outlet/>
       <License/>
    </div>
  )
}

export default Layout