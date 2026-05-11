import React from 'react'

export default function Register({handlePageType}) {
  return (
    <div className='container'>
     <h1>Register</h1>
     <button className='btn btn-primary ms-4' onClick={handlePageType}>Already have an account</button>
    </div>
  )
}
