'use client';
import React, { useState } from 'react'

const TodoList = () => {
    // const [num, setnum] = useState(10); 
    const [tasklist, setTasklist] = useState([
        {text:'learn HTML',completed:false,createdAt:new Date()},
        {text:'learn CSS',completed:false,createdAt:new Date()},
        {text:'learn JS', completed : false,createdAt:new Date()},
        {text:'learn React', completed : false,createdAt:new Date()},
    ]);

    
    const addTask=(e)=>{
        if(e.code==='Enter'){
            console.log(e.target.value);
        }

    };



  return (
    <div className='max-w-[80%] mx-auto'>
       {/* {num} */}
        {/* <button onClick={()=>{setnum(num+1); console.log(num);}}>add number</button> */}

      <h1 className='text-5xl font-bold text-center'>ToDo List</h1>

       <div className='border-2 rounded-md shadow mt-5'>
        <div className='border-b-2 border-gray-600 p-4'>

            <input
            placeholder='Add a new task'
             className='border-2 border-blue-500 rounded p-3 w-full' type="text" 
             onKeyDown={addTask}
             />
             
        </div>
        <div className='p-5'>
            {
                tasklist.map((task, index)=>{return <div key={index}>
                    <p>{task.text}</p>
                    <div>
                    <button>Edit</button>
                    <button>Delete</button>
                    </div>
                    
                </div>})
            }

        </div>

       </div>

    </div>
  )
}

export default TodoList