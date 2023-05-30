import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
    
  const [newItem, setNewItem] = useState("");

  //Make it a function as after first time running, currentToDos adds the item, then it runs it again with the first item already added in it. If its not a function, it will re-render and wipe away the first item thats added.
  //Anytime need to use current value, pass it as function so it retains and adds next item
  function handleSubmit(event) {
    event.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);

    setNewItem(""); //Clears out the input box once you Add an item
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Things To Do!</label>
        <input
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
