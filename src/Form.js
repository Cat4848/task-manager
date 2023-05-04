import { useState, useRef } from "react";
import { v4 } from "uuid";

export function Form({ addNewTask }) {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    function handleInputChange(input) {
        setInput(input);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        addNewTask({
            id: v4(),
            name: input,
            done: false
        })
        setInput("");
        inputRef.current.focus();
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input
                value={input}
                type="text"
                onChange={e => handleInputChange(e.target.value)}
                ref={inputRef}
            />
            <button 
                type="submit"
            >Add Task
            </button>
        </form>
    )
}