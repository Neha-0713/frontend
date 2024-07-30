'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const UpdateUser = () => {


const {id} = useParams();
const [userData, setUserData] = useState(null);

const getUserData = async ()=>{
const res = await axios.get('http://localhost:5000/user/getbyid' + id);
console.log(res.data);
setUserData(res.data);
}

useEffect(() => { 
getUserData();
}, [])


  return (
    <div className='max-w-[80%] mx-auto'>
        <h1 className='text-center font-bold mt-5 text-3xl'>Update User</h1>

        {
          userData !==null ?(
            <Formik initialValues={userData} onSubmit={submitForm}>
              {
                (UpdateForm)=>{
                  return <form onSubmit={UpdateForm.handleSubmit}>
                  <label htmlFor="">Name</label>
                  <input
                  id='name'
                  onChange={UpdateForm.handleChange}
                  value={UpdateForm.values.name}
                  type="text" className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block-w-full' />
        
                  <label htmlFor="">Email Address</label>
                  <input
                   id='email'
                   onChange={UpdateForm.handleChange}
                   value={UpdateForm.values.email}
                  type="text" className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block-w-full' />
        
                  <label htmlFor="">Password</label>
                  <input
                   id='password'
                   onChange={UpdateForm.handleChange}
                   value={UpdateForm.values.password}
                  type="text" className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block-w-full' />
        
                  <label htmlFor="">City</label>
                  <input
                   id='city'
                   onChange={UpdateForm.handleChange}
                   value={UpdateForm.values.city}
                  type="text" className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block-w-full' />

                  
                  <button className='bg-blue-500 text-white px-4 py-2 rounded mt-5'>Submit</button>
                </form>

                }
              }

            </Formik>

          ):(
            <h1>Loading...</h1>
          )
        }
        
    </div>
  )
}

export default UpdateUser