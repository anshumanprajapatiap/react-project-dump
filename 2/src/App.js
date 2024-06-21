import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import { Header } from './components/Header';

function App() {

  const [tasks, setTasks] = useState([
    {id: 123, name: "Record Lectures", completed: true},
    {id: 223, name: "Wash Car", completed: false},
  ]);

  const [show, setShow] = useState(false);

  function handleDelete(id){
    setTasks(tasks.filter(task => id !== task.id));
  }
  function handleComplete(id){
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
  
    // Update the state with the new array of tasks
    setTasks(updatedTasks);
  }

  function handleInComplete(id){
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: false } : task
    );
  
    // Update the state with the new array of tasks
    setTasks(updatedTasks);
  }

  function handleAdd(newId, newName, newCompleted){
    const newTask = { id: newId, name: newName, completed: newCompleted };

  // Update the state by adding the new task to the existing tasks array
  setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <Header/>
      <TaskList
        tasks={tasks}
        handleComplete={handleComplete}
        handleInComplete={handleInComplete}
        handleDelete={handleDelete}
        handleAdd={handleAdd}
      />
    </div>
  );
}

export default App;
