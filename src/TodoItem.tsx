// src/TodoItem.tsx
import React from "react";
import { Todo } from "./Todo";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  Complete: (id: number) => void;
  Incomplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete, //toggleComplete function
  deleteTodo,
  Complete, //markComplete function
  Incomplete, //markIncomplete function
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
      <button className="complete" onClick={() => Complete(todo.id)} disabled={todo.completed}>Complete</button>
      <button className="incomplete" onClick={() => Incomplete(todo.id)} disabled={!todo.completed}>Incomplete</button>
    </div>
  );
};
export default TodoItem;
