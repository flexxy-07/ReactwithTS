import React from 'react'
import { useState, useEffect } from 'react'

const MyComponent = () => {
  const[data, setData] = useState<null>(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
      const response = await fetch('https://dummyjson.com/product/1')

      const result = await response.json();
      setData(result);
    } catch (error) {
        console.log("Error in fetching data",error)
    }
    }
    
      fetchData()
  },[])
  return (
    <div>MyComponent</div>
  )
}

export default MyComponent