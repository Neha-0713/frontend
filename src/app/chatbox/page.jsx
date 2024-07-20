import React from 'react'

const chatbox = () => {
  return (
    <div>
      <h1 className='font-bold font-3xl text-center'>Chat Box</h1>
      <div className='flex flex-row justify-center w-full mx-auto fixed bottom-0 my-3'>
        
        <input className='border-gray-300 rounded-md p-2 w-1/4' type="text" />
        <button className='bg-gray-500 rounded-lg px-3 py-1 absolute ml-80 mt-1 mr-2 text-white'>Send</button>
        </div>
      </div>
    
  )
}

export default chatbox
