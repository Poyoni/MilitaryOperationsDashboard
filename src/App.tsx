import  { useState, useEffect } from 'react';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import { getTasks, addTask } from './api/api';
import { Task } from './types';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleAddTask = async (task: Task) => {
    await addTask(task);
    loadTasks();
  };

  return (
    <div className="app">
      <h1>Military Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onReload={loadTasks} />
    </div>
  );
}

export default App;