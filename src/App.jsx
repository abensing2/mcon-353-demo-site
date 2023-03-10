import { useReducer } from "react";
import "./App.css";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { Header } from "./components/header/header";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TodoContext } from "./state/todocontext";
import { todoReducer } from "./state/todoreducer";
import { Chat } from "./components/chat/chat";

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: [],
  });

  return (
    <HashRouter>
      <Header />
      <TodoContext.Provider value={{ todoState, todoDispatch }}>
        <Routes>
          {/*localhost:3000/#*/}
          <Route path="/" element={<Home />} />
          {/*localhost:3000/#/todo*/}
          <Route path="/todo" element={<Todo />} />
          {/*localhost:3000/#/chat*/}
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </TodoContext.Provider>
    </HashRouter>
  );
}

export default App;
