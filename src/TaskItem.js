import React from "react";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          flexGrow: 1,
        }}
      >
        {task.name}
      </span>
      <button onClick={() => deleteTask(task.id)}>🗑️</button>
    </li>
  );
}
