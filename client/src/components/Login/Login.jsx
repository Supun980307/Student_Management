import React from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center  vh-100 bg-info'>
      <div className ='form_container p-5 rounded bg-white'>
      <form>
        <h3 className='text-center'>Sign In</h3>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" className="form-control"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" className="form-control"/>
        </div>

        <div className='d-grid mt-3'>
          <Link to='/Home'><button className='btn btn-primary'>Sign in</button></Link>
        </div>
        <p className="text-right mt-2">
          Forgot <a href="">Password?</a><Link to = "/signup" className='ms-2'>Sign Up</Link>
        </p>
      </form>
      </div>
    </div>
  )
}

export default Login

