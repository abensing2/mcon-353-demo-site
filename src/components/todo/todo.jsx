import React, {useState} from 'react';


export const Todo = () =>{
    const[input, setInput] = useState("");
    const [todos, setToDos]= useState([]);
    const onInput= (event) =>{
        setInput(event.target.value);
    };
    const addTodo= () => {
        setToDos([...todos, input]);

    }
    return (
        <>
        <h1>Todo</h1>
        <input onInput={onInput}/>
        <button onClick = {addTodo}>Add</button>
        {
            todos.map((todo) => (
            
            <p>
                <input type="checkbox"/>
                {todo}</p>
            ))
        }
        </>
    )
}