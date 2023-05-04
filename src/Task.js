import { useState, useRef } from "react";

export function Task({ task, onComplete, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let content;
    const inputEditRef = useRef(null);

    function handleEditing() {
        inputEditRef.current.focus();
        setIsEditing(!isEditing);
    }

    if (isEditing) {
        content = (
            <>
                <input
                    type="text"
                    ref={inputEditRef}
                    style={{ backgroundColor: "lightskyblue", fontWeight: "bold" }} 
                    value={task.name}  
                />
                < input 
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => onComplete({
                        ...task,
                        done: e.target.checked
                    })}
                />
                <button onClick={() => handleEditing()} >Save</button>
            </>
        )
    } else {
        content = (
            <>
                <input
                    type="text"
                    ref={inputEditRef}
                    style={{ backgroundColor: "lightcyan", fontWeight: "bold" }} 
                    value={task.name} 
                    readOnly 
                />
                < input 
                    type="checkbox"
                    checked={task.done}
                    onChange={e => onComplete({
                        ...task,
                        done: e.target.checked
                    })}
                />
                <button onClick={() => handleEditing()} >Edit</button>
            </>
        )
    }
    return (
        <div>
            {content}
            <button onClick={() => onDelete(task.id) } >Delete</button>
        </div>
    )
}