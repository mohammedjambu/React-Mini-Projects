import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onAddTodo(input);
      setInput("");
      console.log(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2 mb-4">
      <input
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition hover:cursor-pointer"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
