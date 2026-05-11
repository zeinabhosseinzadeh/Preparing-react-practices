import React from 'react'
import { useEffect } from 'react'


export default function Userr() {
     const [users,setUsers]=usestate()
     useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')

          .then((res)=> res.json())
          .then((data)=>setUsers(data))
     },[])
  return (
     <div>
          <ul>
               {items}
          </ul>
     </div>
    
  )
}
