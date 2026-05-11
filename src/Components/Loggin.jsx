
import React,{useState} from 'react'

export default function Loggin() {
     const [username,setUsername]=useState()
     const [password,setPassword]=useState()
     const[err,setErr]=useState(false)
     const [showModal,setShowModal]=useState(false)

     const [token,setToken]=useState()

     const handleSubmit=async(e)=>{
          e.preventDefault()
        const res = await fetch('https://fakestoreapi.com/auth/login', {
         method:'post',
         headers:{
          'Contetnt-type':'application/json',
         },
         body:JSON.stringify({username,password})

     })

     const data =await res.json()
     if (data.status==='success'){
          setToken(data.token)
     }else{
          setErr(data.message)
         
     }
     

  return (
    <>
    <form onSubmit={handleSubmit}>
     <div className='mb-3'>
          <label for="exampleInputEmail1" className='form-label'>Email</label>
          <input type="email" placeholder='enter username' onChange={(e)=> setUsername(e.target.value)} className='form-control' id="exampleInputEmail" aria-describedby='emailHelp'/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

     </div>
     <button onClick={()=> setShowModal(!showModal)}>show Modal</button>
                 {showModal && <div data-testid='modal'>This is modal</div>}
    </form>

    </>
  )
}
}