import React from 'react'

const EventHandling = () => {
  const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked", e.currentTarget);
  }

  const handleMouseEnter = (e : React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse entered",e.currentTarget)
  }
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default EventHandling