import React, {useState} from 'react'

function ToDoList() {
const [tasks, setTasks]=useState([]);
const [newTask, setNewTask]=useState("")
const handleOnChange=(e)=>{
    setNewTask(e.target.value)
}
const handleOnClick=()=>{
    if(newTask)
    {
        setTasks([...tasks,newTask]);
        setNewTask('')
    }
}
const handleDelete=(index)=>{
    setTasks(tasks.filter((task,i)=>i!==index))
}
  return (
    <div style={{textAlign:'center'}}>
        <div style={{margin:'10px' }}>
<input type="text" style={{padding:'5px', marginRight:'10px'}}value={newTask} placeholder='New item' onChange={handleOnChange}></input>
<button style={{cursor:'pointer'}} onClick={handleOnClick}>Add Task</button>
</div>
<ul>
    {
        tasks.length==0?(
            <p>No Tasks</p>
        ):(
            tasks.map((task, index)=>(
                <li>
                    {tasks}
                    <button  style={{cursor:'pointer', marginLeft:'10px'}} key ={index} onClick={()=>handleDelete(index)}>Delete</button>
                </li>
            ))
        )
    }
</ul>
    </div>
  );
}

export default ToDoList;