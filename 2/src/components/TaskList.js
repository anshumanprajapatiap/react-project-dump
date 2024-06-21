import React, { useState } from 'react';
import '../App.css';

function TaskList({ tasks, handleComplete, handleInComplete, handleDelete, handleAdd }) {
  const [show, setShow] = useState(true); // Initial state for show toggle
  const [newTaskName, setNewTaskName] = useState(''); // State for input field: task name
  const [newTaskCompleted, setNewTaskCompleted] = useState(false); // State for input field: task completed
  const [errorMessage, setErrorMessage] = useState(''); // State for error message


  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    if (type === 'checkbox') {
      setNewTaskCompleted(checked);
    } else {
      setNewTaskName(value);
    }
  };

  const handleAddTask = () => {
    if (newTaskName.trim() === '') {
        setErrorMessage('Task name should not be empty');
        return;
      }

    // Generate a random id (for demo purposes; use a proper id generation method in production)
    const randomId = Math.floor(Math.random() * 900) + 100;
    handleAdd(randomId, newTaskName, newTaskCompleted);
    // Reset input fields after adding task
    setNewTaskName('');
    setNewTaskCompleted(false);
    setErrorMessage('');
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <button onClick={() => setShow(!show)} className='trigger'>{show ? "Hide" : "Show"}</button>
      <ul>
        {show && tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : "incompleted"}>
            <span>{task.id} - {task.name}</span>
            {task.completed ? (
              <button onClick={() => handleInComplete(task.id)} className='markdone'>Mark Incomplete</button>
            ) : (
              <button onClick={() => handleComplete(task.id)} className='markdone'>Mark Done</button>
            )}
            <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
          </li>
        ))}
      </ul>
      {/* Input fields for adding new task */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Task Name"
          value={newTaskName}
          onChange={handleInputChange}
          className="task-input"
          name="taskName"
        />
        <label>
          Completed:
          <input
            type="checkbox"
            checked={newTaskCompleted}
            onChange={handleInputChange}
            className="task-checkbox"
            name="completed"
          />
        </label>
        <button onClick={handleAddTask} className='add-task-button'>Add Task</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
  
}

export default TaskList;
