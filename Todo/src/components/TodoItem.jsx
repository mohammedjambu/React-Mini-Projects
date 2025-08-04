import React from "react";
import { motion } from "framer-motion";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <motion.div
      className="flex justify-between items-center bg-white px-4 py-2 mb-2 rounded shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      layout
    >
      <div className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="accent-blue-500 hover:cursor-pointer"
        />
        <span
          className={`flex-1 ${
            todo.completed ? "line-through text-gray-400" : ""
          } text-lg`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 transition hover:cursor-pointer"
      >
        Delete
      </button>
    </motion.div>
  );
}

export default TodoItem;
