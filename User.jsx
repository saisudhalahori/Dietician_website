import React from 'react'
import AdminNavbar from '../../Admincomponents/adminenavbar/Adminnavbar'
import AdminSidebar from "../../Admincomponents/adminsidebar/Adminsidebar"
import './user.scss'
import UserInfo from '../../Admincomponents/userInfo/UserInfo'

function User() {
  return (
    <div className='user'>

     <AdminSidebar />
       <div className="usercontainer">
     <AdminNavbar />
       <div className='userinfo'>
        <UserInfo />
       </div>

   </div>
</div>
  )
}

export default User