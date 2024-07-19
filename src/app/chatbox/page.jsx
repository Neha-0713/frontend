'use client';
import React, { useState } from 'react'


const chatbox = () => {
  const [message,setMessage]=useState([]);

    
    const sendMessage=(e)=>{
        console.log(e.target.value);
        const newMsg={text:e.target.value};
        
        setMessage([...message,newMsg])
        e.target.value='';

      
        }

  return (
    <div className='bg-gray-200 fixed bottom-0 w-full py-10 max-w-[80%] mx-auto shadow-lg '>
        <div className='flex'>
        <input className='w-full bg-gray-100 rounded-sm' type="text" />
        <button className='w-auto  bg-gray-500 text-white rounded-lg px-3 py-2' onClick={sendMessage}>send</button>
        </div>
        <div>{
          message.map((a)=>{return a.message})
          }
          
        </div>
    </div>
  )
}

export default chatbox
