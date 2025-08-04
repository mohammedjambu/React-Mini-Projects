import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const ToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
  if (filter === "active") return !todo.completed;
  if (filter === "completed") return todo.completed;
  return true;
});

  return (
    <div className="min-h-screen flex justify-center items-start pt-20 bg-gradient-to-br from-gray-100 to-blue-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold mb-4 text-center text-blue-600">Todo List</h1>
        <TodoForm onAddTodo={addTodo} />
        <FilterBar filter={filter} setFilter={setFilter} />
        <TodoList todos={filteredTodos} onDelete={deleteTodo} onToggle={ToggleTodo} />
      </div>
    </div>
  );
}

export default App;
