// App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from backend or local storage on component mount
    // Example: fetchTasks();
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    // Code to save task to backend or local storage
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    // Code to delete task from backend or local storage
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;
