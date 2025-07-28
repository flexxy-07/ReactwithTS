import React from 'react'
import type { AdminInfoList } from './type'

type AdminInfoProp = {
  admin : AdminInfoList
}
const AdminInfo : React.FC<AdminInfoProp>= ({admin}) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>Name : {admin.name}</p>
      <p>Email : {admin.email}</p>
      <p>ID : {admin.id}</p>
      <p>Role : {admin.role}</p>
      <p>Login Date : {(admin.lastLogin).toString()}</p>
    </div>
  )
}

export default AdminInfo