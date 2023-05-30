import "./styles.css";
import { Fragment } from "react";
import { useState } from "react";
import { NewTodoForm } from "./NewToDoForm";

//In react - Top level we can only return one element so we can use fragment to include everything in it
//To return multiple elements - Use fragment <>
export default function App() {
  const [todos, setTodos] = useState([]);

  //Add items to list
  function addToDo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  //Add ticks to checkbox
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }; //Not mutate by creating new array of the original. Change only "the completed".
        }
        return todo;
      });
    });
  }

  //(id) that is to be deleted
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  //console.log(todos);

  //Passing the onSubmit - addToDo props to NewTodoForm below.I used destructure on newTodoForm though
  return (
    <Fragment>
      <NewTodoForm onSubmit={addToDo} />
      <h1 className="header">To-Do List</h1>
      <ul className="list">
        {todos.length === 0 && "Nothing to do"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(event) =>
                    toggleTodo(todo.id, event.target.checked)
                  }
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}
