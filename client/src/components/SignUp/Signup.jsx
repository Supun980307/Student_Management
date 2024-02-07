import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup template d-flex justify-content-center align-items-center  vh-100 bg-info'>
    <div className ='form_container p-5 rounded bg-white'>
    <form>
      <h3 className='text-center'>Sign Up</h3>
      <div>
        <label htmlFor="name" >Name</label>
        <input type="text" placeholder="Name" className="form-control my-2"/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" className="form-control my-2"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" className="form-control my-2"/>
      </div>
      <div>
        <label htmlFor="password">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" className="form-control my-2"/>
      </div>

      <div className='d-grid mt-3'>
        <button className='btn btn-primary'>Sign Up</button>
      </div>
      <p className="text-right mt-2">
        Already Registered<Link to = "/" className='ms-2'>Sign In</Link>
      </p>
    </form>
    </div>
  </div>
  )
}

export default Signup
