import { useReducer } from 'react';
import './App.css';
import initialTasks from "./task-list.json";
import { Tasks } from "./Tasks";
import { Form } from "./Form";

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  function handleAddNewTask(newTask) {
    dispatch({
      type: "added",
      ...newTask
    })
  }

  function handleDeleteTask(id) {
    dispatch({
      type: "deleted",
      id: id
    })
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task
    })
  }

  function reducer(tasks, action) {
    switch (action.type) {
      case "added": {
        return [
          ...tasks,
          {
            id: action.id,
            name: action.name,
            done: action.done
          }
        ];
      }
      case "changed": {
        return tasks.map(task => {
          return task.id === action.task.id ? action.task : task;
        })
      }
      case "deleted": {
        return tasks.filter(task => task.id !== action.id)
      }
      default: {
        throw Error("No matching action");
      }
    }
  }
  return (
    <>
      <h1>Task Manager</h1>
      <h2>My Tasks</h2>
      <Form addNewTask={handleAddNewTask} />
      <Tasks 
        tasks={tasks} 
        onComplete={handleChangeTask} 
        onDelete={handleDeleteTask} 
      />
    </>
  )
}