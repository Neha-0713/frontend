import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
        <h1 className='text-3xl text-center mt-10'>Login Page</h1>
        <button className={classes.loginBtn}>Login Now</button>
        </div>
  )
}

export default Login