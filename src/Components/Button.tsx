import React from 'react'

interface Button {
  label : string;
  onClicked : () => void;
  disabled : boolean;
}
export const Button = ({label,disabled,onClicked} : Button) => {
  return (
    <div>
      <button onClick={onClicked} disabled = {disabled}>
          {label}
      </button>
    </div>
  )
}
