import React, {memo} from 'react'
import {  Link, NavLink, useNavigate } from 'react-router-dom'
import "./Sidebar.scss"
import { FaArrowAltCircleLeft, FaRegUserCircle } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { FaFileContract } from "react-icons/fa";


const Sidebar = () => {
    const navigate = useNavigate()
    const handleLogOut = ()=>{
        localStorage.clear()
        navigate("/register")
    }
  return (
    <div className='sidebar'>
        
        <h2 className='sidebar__logo'>
          <Link to={"/register"}><FaArrowAltCircleLeft/></Link>
          <span>Admin Dashboard</span>
        </h2>
        <ul className="sidebar__collection">
        <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"user"}>
            <FaRegUserCircle /> 
              <span>User</span>
            </NavLink>
          </li>
        <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"chart"}>
            <IoStatsChartSharp />
              <span>chart</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"contrakt"}>
            <FaFileContract />
              <span>Contrak</span>
            </NavLink>
          </li>
        <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"dashboard"}>
            <MdDashboardCustomize />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"create"}>
              <IoCreateOutline />
              <span>Create Product</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"manage"}>
              <IoCreateOutline />
              <span>Manage Product</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
          <button onClick={handleLogOut}><p>Logout</p> <CiLogin /> </button>
          </li>
   
        </ul>
       
    </div>
  )
}

export default memo(Sidebar)