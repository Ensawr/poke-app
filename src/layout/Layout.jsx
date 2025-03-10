import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from './Footer';
import Navbar from './Navbar'

const Layout = () => {
  return (
    <>
        <Navbar />
        <div className="max-w-[1440px] mx-auto" id='main' >
            <Outlet />
        </div>
        <Footer/>
    </>
  )
}

export default Layout