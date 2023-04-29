import { Task } from "./Task";

export function TaskList({ tasks }) {
  return (
    <div>
      <input 
        type="text" 
      />
      <button>Add Task</button>
      {
        tasks.map((task, i) => (
        <Task 
          key={i} 
          task={task} 
        />))
      }
    </div>
  )
}