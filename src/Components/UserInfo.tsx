import React from 'react'
import type { Info } from './type'

type UserInfoProp = {
  user : Info;
}
const UserInfo : React.FC<UserInfoProp> = ({user}) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>ID : {user.id}</p>
      <p>Email : {user.email}</p>
      <p>Name : {user.name}</p>
    </div>
  )
}

export default UserInfo