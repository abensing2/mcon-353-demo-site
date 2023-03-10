import React, { useState, useContext } from "react";
import "./todo.css";
import IconButton from "@mui/material/IconButton";
import { TextField, ThemeProvider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { blue } from "@mui/material/colors";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Checkbox from "@mui/material/Checkbox";
import { TodoContext } from "../../state/todocontext";
import { TodoActions } from "../../state/todoreducer";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

export const Todo = () => {
  const [input, setInput] = useState("");
  const { todoState, todoDispatch } = useContext(TodoContext);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };
  const addTodo = () => {
    todoDispatch({
      type: TodoActions.ADD,
      todo: { title: input, isComplete: false },
    });
    setInput("");
  };
  const toggleChecked = (todo) => {
    todoDispatch({
      type: TodoActions.TOGGLE,
      todo,
    });
  };

  const deleteTodo = (todo) => {
    todoDispatch({
      type: TodoActions.DELETE,
      todo,
    });
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div class="display">
      <h1>Todo</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <TextField
            id="standard-basic"
            label="Enter a Task:"
            defaultValue="Enter a Task:"
            variant="standard"
            onInput={onInput}
            value={input}
            color="primary"
          />
          <div className="add">
            <IconButton onClick={addTodo} edge="start" color="primary">
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </Box>
      <div className="task">
        {todoState.todos.map((todo, index) => (
          <p key={index} index={index} deleteTodo={deleteTodo} draggable>
            <Checkbox
              {...label}
              icon={<CheckCircleOutlineIcon />}
              checkedIcon={<CheckCircleIcon />}
              checked={todo.isComplete}
              onChange={() => toggleChecked(todo)}
              sx={{
                color: blue[800],
                "&.Mui-checked": {
                  color: blue[600],
                },
              }}
            />
            <IconButton
              onClick={() => deleteTodo(index)}
              edge="start"
              color="primary"
            >
              <DeleteOutlineIcon />
            </IconButton>

            {todo.title}
          </p>
        ))}
      </div>
    </div>
  );
};
