import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './todo.css';



export const Todo = () =>{
    const[input, setInput] = useState("");
    const [todos, setToDos]= useState([
        {title:'first', 
        isComplete:false
    }, 
        {
        title:'second', 
        isComplete:true
        }]);
    const onInput= (event) =>{
        setInput(event.target.value);
    };
    const addTodo= () => {
        setToDos([...todos, {title: input, isComplete: false}]);
        setInput("");

    }
    const toggleChecked = (todo) => {
       // todo.isComplete = !todo.isComplete;
        const newTodos = [...todos];
        const updatedTodo= newTodos.find(x => x.title === todo.title);
        updatedTodo.isComplete= !todo.isComplete;
        setToDos(newTodos);
    }
    const deleteTodo= (input) => {
        const removeToDos = [...todos];
        removeToDos.splice(input, 1);
        setToDos(removeToDos);

    }
    return (
       <>
       <div class="display">
        <h1>Todo</h1>
        <input onInput={onInput} value={input}/>
        <button onClick = {addTodo}>Add</button>
        {
            todos.map((todo) => (
    
            <>
            <p key={todo.title}>
                    {todo.title}
                    <input type="checkbox" checked={todo.isComplete} onInput={() => toggleChecked(todo)} />
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={()=> deleteTodo(input)}/>
                    </IconButton>
                    </p>
                    
                 </>
                
            ))
            
        }
        </div>
        </>

    )
}