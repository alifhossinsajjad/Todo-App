// src/App.tsx
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./Todo";
import "./App.css"; // Import the CSS file

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // state to hold the todos
  const [inputValue, setInputValue] = useState<string>(""); // State to hold the current input value
  
  // Function to add a new todo
  const addTodo = () => {
    if (inputValue.trim() === "") return; // prevent adding empty items

    const newTodo: Todo = {
      id: Date.now(), //use current timestamp as unique id
      text: inputValue, //text todo item
      completed: false, // new items are not initially completed
    };

    setTodos([...todos, newTodo]);
    setInputValue(""); // clear the input field
  };

  // Function to toggle the completion status of a todo item
  const toggleComplete = (id: number) => { 
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo item
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // remove the todo with the given id from the todos array
  };

  return (
    <div className="container">
      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // update the input value when the input changes
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button> {/* Add a button to trigger the addTodo function */}
      </div>
      <div>
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            <TodoItem
              todo={todo}
              toggleComplete={toggleComplete} // Pass the toggleComplete function to the TodoItem component
              deleteTodo={deleteTodo} // Delete the todo item when the delete button is clicked
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
