// src/TodoItem.tsx
import React from "react";
import { Todo } from "./Todo";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete, //toggleComplete function
  deleteTodo,
}) => {
  return (
    <div className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)} //complete the todo item
          aria-label={`Mark ${todo.text} as ${
            todo.completed ? "incomplete" : "complete"
          }`}
        />
        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      </label>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>  
    </div>
  );
};
export default TodoItem;
