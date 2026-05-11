// 
import React from 'react';
import useFormFields from '../../../Utils/UseFormFields'
// import authContext from '../../../Utils/AuthContext'
import { useDispatch } from 'react-redux';

export default function Login({handlePageType}) {
     const [fields,handleChange]=useFormFields()
     const dispatch = useDispatch()


     // const [token,handleToken]=useContext(authContext)

     const handleSubmit=async(e)=>{
          e.preventDefault();
          try {
               const res = await fetch ('https://fakestoreapi.com/auth/login',{
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body: JSON.stringify(fields)
               })
               const data=await res.json()
               console.log(data);

               alert('login successfully')
               dispatch(Login(data.token))

               
          } catch (error) {
               alert ('userName or Password is Inavlid')
               
          }
     }

  return (
     <from classname='container mt-5' onSubmit={handleSubmit}>
           <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input type="text" onChange={handleChange} className="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onChange={handleChange} className="form-control" name='password' id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <button className='btn btn-primary ms-4'  onclick={handlePageType}>do not have an account</button>


     </from>
  
  )
}
