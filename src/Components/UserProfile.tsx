import React, { useState } from 'react'

interface UserProfileState {
  name : string;
  age : number;
  email : string;
}
const UserProfile = () => {

  const[submitted, setSubmitted] = useState<UserProfileState | null>(null);
  
  const updateName = (name : string ) => {
    setProfile((prevProfile) => ({...prevProfile, name : name,}))
  }
  const updateAge = (age : number) => {
    setProfile((prevAge) => ({
      ...prevAge,
      age : age,
    }));
  }

  const updateEmail = (email : string) => {
    setProfile((prevEmail) => ({
      ...prevEmail,
      email : email,
    }))
  }

  const handleSubmit = () => {
    setSubmitted(profile)
  }
  
  const[profile, setProfile] = useState<UserProfileState>({
    name : '',
    age : 0,
    email : '' ,
    })
  return (
    <div>
      <h2>User Profile</h2>
      <input type="text" placeholder='Enter your Name...' onChange={(e) => updateName(e.target.value)} value={profile.name}/>
      <input type="number" placeholder='Enter age...' onChange={(e) => updateAge(Number(e.target.value))} value={profile.age}/>
      <input type="text" placeholder='Enter email...' onChange={(e) => updateEmail(e.target.value)} value={profile.email}/>

      <button onClick={() => handleSubmit()}>Submit</button>

      {submitted && (
        <ul>
        <li>Name : {profile.name}</li>
        <li>Age : {profile.age}</li>
        <li>Email : {profile.email}</li>
      </ul>
      )}
    </div>
  )
}

export default UserProfile