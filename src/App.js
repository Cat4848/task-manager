import { useState } from 'react';
import './App.css';
import initialTasks from "./task-list.json";
import { TaskList } from "./TaskList";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  // console.log("App component -> tasks", tasks);
  return (
    <>
      <h1>Task Manager</h1>
      <h2>My Tasks</h2>
      <TaskList tasks={initialTasks} />
    </>
  )
}