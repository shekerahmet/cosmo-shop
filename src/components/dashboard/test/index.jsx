"use client"
import React from 'react'

const Test = () => {

    const handleClick = () => { 
        alert("Hello")
     }

  return (
    <div>
        <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Test