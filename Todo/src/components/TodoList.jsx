import React from "react";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

function TodoList({ todos, onDelete, onToggle }) {
  return (
    <>
    <div className="border-t-1 text-gray-400" />
    <div className="mt-4">
      <AnimatePresence>
        {todos.length === 0 ? (
            <p className="text-center text-gray-400 mt-4">
            No todos yet! Add one above 👆
          </p>
        ) : (
            todos.map((todo) => (
                <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onToggle={onToggle}
                />
            ))
        )}
      </AnimatePresence>
    </div>
        </>
  );
}

export default TodoList;
