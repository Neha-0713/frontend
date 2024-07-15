'use client';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const TodoList = () => {
    // const [num, setnum] = useState(10); 
    const [tasklist, setTasklist] = useState([]);

    
    const addTask=(e)=>{
       
        if(e.code==='Enter'){

            if(!e.target.value){
                alert('enter a value to add')
                return;
            }
            console.log(e.target.value);
            const newTask={text:e.target.value,completed:false,createdAt:new Date()};
            setTasklist([...tasklist,newTask]);
            e.target.value='';
            toast.success('New task added successfully');
        }

    };

    const deleteTask=(index)=>{
        console.log(index);
        const temp=tasklist;
        temp.splice(index,1);
        setTasklist([...temp]);
        toast.success('Task deleted successfully');
        
    }

    const toggleComplete=(index)=>{
        const temp=tasklist;
        temp[index].completed=!temp[index].completed;
        setTasklist([...temp]);

    }



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
                tasklist.map((task, index)=>{return <div key={index} className='shadow-md border-2 p-4 mb-5 rounded-lg '>
                    {task.completed?(
                        <p className='text-sm bg-green-500 w-fit rounded-full text-white px-3'>Complete</p>

                    ):(
                        <p className='text-sm bg-yellow-500 w-fit rounded-full text-white px-3'>Pending</p>
                    ) }
                    <p className={task.completed ? 'line-through':''}>{task.text}</p>
                    <div className='mt-3 flex gap-3 justify-end'>

                    <button
                    onClick={()=>{toggleComplete(index)}}
                    className='bg-blue-500 px-2 text-white rounded-full '>Edit</button>


                    <button 
                    onClick={()=>{deleteTask(index)}}
                    
                    className='bg-red-500 px-2 text-white rounded-full '>Delete</button>
                    </div>
                    
                </div>})
            }

        </div>

       </div>

    </div>
  )
}

export default TodoList