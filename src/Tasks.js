import { Task } from "./Task";

export function Tasks({ tasks, onComplete, onDelete }) {
  return (
    <div>
      {
        tasks.map((task, i) => (
            <Task 
              key={i} 
              task={task} 
              onComplete={onComplete}
              onDelete={onDelete}
            />
          )
        )
      }
    </div>
  )
}