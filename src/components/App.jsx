import React, { useState } from "react";
import ToDoItems from "./ToDoItems";

function App() {
  const [inputTeaxt, setInputText] = useState("");
  const [items, setItem] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function handleClick() {
    setItem((prevItems) => {
      return [...prevItems, inputTeaxt];
    });

    setInputText("");
  }

  function deletItem(id) {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          name="input"
          value={inputTeaxt}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <ToDoItems
                key={index}
                id={index}
                item={item}
                onChecked={deletItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
