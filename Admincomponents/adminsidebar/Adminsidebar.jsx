import React, { useContext, useReducer } from 'react'
import './adminside.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import EscalatorWarningRoundedIcon from '@mui/icons-material/EscalatorWarningRounded';
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Context/AuthContext';
function AdminSidebar() {
    // let {dispatch} = useContext(AuthContext);
    let naviget = useNavigate()

    const handelLogout = ()=>{
        //   sessionStorage.removeItem('user')
        //   dispatch({typeof:"LOGOUT"})

        //   naviget('/login')
    }

  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo"> Admin Penal </span>

            </Link>
        </div>
        <hr />
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icons' />
                    <span>Deshboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <PeopleOutlinedIcon className='icons' />
                <span>Users</span>
                </li>
                </Link>
                
                <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                    <EscalatorWarningRoundedIcon className='icons' />
                <span>Appintment</span>
                </li>
                </Link>
                
                <p className="title">USEFULL</p>
                <li>
                    <AssessmentIcon  className='icons' />
                <span>Status</span>
                </li>
                <li>
                    <NotificationsNoneIcon  className='icons' />
                <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className='icons' />
                <span>Systme Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className='icons' />
                <span>Loges</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icons' />
                <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icons' />
                <span>Profile</span>
                </li>
                <li  onClick={handelLogout}>
                    <LoginOutlinedIcon className='icons' />
                <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="coloroptions"></div>
            <div className="coloroptions"></div>
            <div className="coloroptions"></div>
        </div>
    </div>
  )
}

export default AdminSidebar