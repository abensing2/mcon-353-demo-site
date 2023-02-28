import { Todo } from "../components/todo/todo";

const TodoActions = {
  ADD: "ADD",
};
const todoReducer = (state, action) => {
  switch (action.type) {
    case TodoActions.ADD: {
      return { todos: [...state.todos, action.todo] };
    }
  }
};
const addAction = {
  type: TodoActions.ADD,
  todo: { title: "random", isComplete: false },
};
