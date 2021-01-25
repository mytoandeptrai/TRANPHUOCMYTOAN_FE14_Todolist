import React, { useState, Fragment } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "viec 1",
      completed: false,
    },
    {
      id: 2,
      content: "viec 2",
      completed: false,
    },
    {
      id: 3,
      content: "viec 3",
      completed: true,
    },
  ]);

  const handleTodoSubmit = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const markComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleEditing = (content, id) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          content,
        };
      } else {
        return {
          ...todo,
        };
      }
    });
    setTodos(newTodoList);
  };

  return (
    <Fragment>
      <div className="header">
        <TodoForm handleTodoSubmit={handleTodoSubmit} />
      </div>
      <div className="container">
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          markComplete={markComplete}
          handleEditing={handleEditing}
        />
      </div>
    </Fragment>
  );
};
