import React, { useState } from 'react'
interface Form {
  name: string;
  leetcodeCount : number;
  devStatus : string;
}

const ContactForm = () => {

  const[info, setInfo] = useState<Form>({
    name: '',
    leetcodeCount: 0,
    devStatus: '',
  })

  const[submitted, setSubmitted] = useState<Form | null>(null);
  const handleClick = (e : React.FormEvent) => {
      e.preventDefault();
    setSubmitted(info);
  }
  return (
    <form onSubmit={handleClick}>
        <input type="text" value = {info.name} placeholder='Enter name' onChange={(e) => setInfo({
          ...info,name : e.target.value
        })}/>
        <input type="number" placeholder='Enter count' value={info.leetcodeCount} onChange={(e) => setInfo({
          ...info,leetcodeCount : Number(e.target.value)
        })}/>
        <input type="text" placeholder='Enter Status' value={info.devStatus} onChange={(e) => setInfo({
          ...info,devStatus : e.target.value
        })}/>
        <button type='submit' onClick={handleClick}>Submit</button>
        
        {submitted && (
          <ul>
            <li>Name : {submitted.name}</li>
            <li>LeetCode Count : {submitted.leetcodeCount}</li>
            <li>Web Dev : {submitted.devStatus}</li>
          </ul>
        )}
    </form>
  )
}

export default ContactForm