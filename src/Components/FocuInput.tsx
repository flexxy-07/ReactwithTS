import React, { useRef } from 'react'

const FocusInput = () => {
  const val = useRef<HTMLInputElement>(null);

  const focusVal = () => {
    if(val.current){val.current.focus();
    val.current.value = "Just do the work and forget all the shit housery";}
  }
  return (
    <div>
      <input type="text" ref={val} />
      <button onClick={() => focusVal()}>Focus</button>
    </div>
  )
}

export default FocusInput