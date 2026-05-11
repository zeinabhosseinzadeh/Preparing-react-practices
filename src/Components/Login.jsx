// import React, { useEffect } from 'react'
// import useFormFields from '../Utils/UseFormFields'

// export default function Login() {

//   const [fields,handleChange]=useFormFields()

//   useEffect(()=>{
//     console.log(fields);


//   },[fields])

//   const handleSubmit= async(e)=>{
//     e.preventDefault();
//      try {
//             const res = await fetch('https://fakestoreapi.com/auth/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(fields)
//             })
//             const data = await res.json()
//             console.log(data);
            
//         } catch (error) {

//         }
   
   
 

//   }


  
//   return (
//      <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
//                 <input type="text" onChange={handleChange} className="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp" />
//                 <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                 <input type="password" onChange={handleChange} className="form-control" name='password' id="exampleInputPassword1" />
//             </div>

//             <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//   )
// }
