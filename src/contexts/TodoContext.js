import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      todo: "Learn DSA",
      id: 1,
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) =>{},
});//default value

export const UseTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
