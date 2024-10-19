import React, {useState} from 'react'
import {Button, TextField }from '@mui/material';
function ToDoList() {
    const [tasks,setTasks]=useState([]);
    const [newTask, setNewTask]=useState('');
    const handleOnchange =(e)=>{
        setNewTask(e.target.value);
    }
const addTask=()=>{
    if(newTask){
    setTasks([...tasks, newTask]);
    setNewTask('');
    }
}
const handleDeleteButton=(index)=>{
    setTasks(tasks.filter((task, i)=>i!==index));
}
    
  return (
    <div style={{margin:10}}>
        <TextField type="text" value={newTask} label="New Item" onChange={handleOnchange} style={{margin:10}}>
        </TextField>
        <Button onClick={addTask}style={{margin:10}}>
            Add Task
        </Button>
        <ui>
            {
                tasks.length==0?(<p>No Tasks</p>):(tasks.map((task, index)=>(<li>
{task}<Button onClick={()=>{handleDeleteButton(index)}}> Delete Button</Button>
                </li>)))
            }
        </ui>
    </div>
  )
}

export default ToDoList