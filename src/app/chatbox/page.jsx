'use client';
import React, { useState }  from 'react'

const chatbox = () => {
  const [text, setText] = useState([]);
  const [valu, setValu] = useState("");

  const getVal = (e) => {
    setValu(e.target.value);
  };

  const setVal = () => {
    if (valu !== "") {
      setText([...text, valu]);
      setValu("");
      console.log(text);
    }

  }

  return (
    <div>
      
      <div  className='flex justify-center gap-3'>
      <h1 className='font-bold font-3xl text-center fixed top-24'>Chat Box</h1>
      <div className='flex justify-center w-full mx-auto fixed bottom-0 my-3'>
        
        <input onChange={getVal} className='border-gray-300 border-2 rounded-md p-2 w-1/4' type="text" />
        <button onClick={setVal} className='bg-gray-500 rounded-lg px-3 py-1 absolute ml-80 mt-1 mr-2 text-white'>Send</button>
        </div>
        <div>
        </div>
        <div className="flex-grow overflow-y-auto no-scrollbar p-4">
          {text.map((a, index) => (
            <div key={index} className="flex justify-end ">
              <p className="text-white bg-gray-700 w-fit p-2 rounded-lg rounded-tr-none mb-4 mr-2">
                {a}
              </p>
                 
            </div>
          ))}
        </div>
        </div>
        </div>
      
    
  )
}

export default chatbox
