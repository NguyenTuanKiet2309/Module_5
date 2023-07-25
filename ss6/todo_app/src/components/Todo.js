import React, { useState, useEffect } from "react";
import { getTodoList, createTodo } from "../service/TodoService";
function ListTodo() {
  const [todos, setTodos] = useState([]);

  function getList() {
    const getTodo = async () => {
      const data = await getTodoList();
      setTodos(data);
    };
    getTodo();
  }

  useEffect(() => {
    getList();
  }, []);

  const handleSubmit = async () => {
    const data = await getTodoList();
    console.log(data);
    const name = document.getElementById("title").value;
    const obj = {
      title: name,
    };
    await createTodo(obj);
    setTodos(data);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Todo:
          <input type="text" id="title" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListTodo;
