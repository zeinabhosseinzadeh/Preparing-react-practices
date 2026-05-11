import React, { useEffect, useRef } from "react";

export default function Ref() {
  const inpRef = useRef()
  const divEl = useRef()


   const handleClick= ()=>{
     divEl.current.style.backgroundColor = inpRef.current.value

  }
 

  return (
    <div>
     <input  ref={inpRef}  type="text"/>
      <button className="btn btn-success" onClick={handleClick}> Change</button>
      <div ref={divEl}>Change color</div>
    </div>
  )
}
