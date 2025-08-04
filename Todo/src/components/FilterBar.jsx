import React, { useState } from "react";

function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex justify-between mb-2">
      <button
        className={`px-2 py-1 rounded-lg ${
          filter === "all"
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className={`px-2 py-1 rounded-lg ${
          filter === "active"
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>

      <button
        className={`px-2 py-1 rounded-lg ${
          filter === "completed"
            ? "bg-blue-400 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterBar;
