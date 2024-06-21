
import React, { useState } from 'react';

export const TaskCard = ({task, handleComplete, handleInComplete, handleDelete}) => {
    const [newTaskCompleted, setNewTaskCompleted] = useState(false); // State for input field: task completed
    
  
    return (
    <li key={task.id} className={task.completed ? "completed" : "incompleted"}>
        <span>{task.id} - {task.name}</span>
        {task.completed ? (
            <button onClick={() => handleInComplete(task.id)} className='markdone'>Mark Incomplete</button>
        ) : (
            <button onClick={() => handleComplete(task.id)} className='markdone'>Mark Done</button>
        )}
        <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
        </li>
  )
}
