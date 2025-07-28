import React from 'react'
import UserInfo from "./Components/UserInfo"
import AdminInfo from "./Components/AdminInfo"
import type { Info, AdminInfoList } from "./Components/type"

const CreatingObjectsWithType = () => {
  const user : Info = {
    id : 1,
    name : "Johnny",
    email: "johnny@gmail.com"
  }

  const admin : AdminInfoList = {
    id : 2,
    name: "Master Slave",
    email : "slave@gmail.com",
    role : "admin",
    lastLogin : new Date(),
  }
   return (
    //  <div>
    //   <Button label = "Click" onClicked = {() => console.log('Clicked')} disabled = {false}/>
    // </div>
    <div>
      {/* <UserInfo user = {user}/>
      <AdminInfo admin = {admin}/> */}
    </div>
   )
}

export default CreatingObjectsWithType