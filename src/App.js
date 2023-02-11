import { useState } from "react";
import { uuid4 as uniqueID } from "uuid4";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState({});
  const [todos, setTodos] = useState([]);

  const inputChangeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const deleteHandler = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const sortHandler = (e) => {
    setTodos([
      ...todos.sort((a, b) =>
        e.target.value === "asc"
          ? a.date.getTime() - b.date.getTime()
          : b.date.getTime() - a.date.getTime()
      ),
    ]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    inputs.id = uniqueID();
    inputs.date = new Date();

    setTodos([...todos, inputs]);
  };
  return (
    <div className="App">
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            name="task"
            onChange={inputChangeHandler}
          />
          <button type="submit">Add task</button>
        </form>
      </div>
      <div>
        <label htmlFor="sort">
          <select name="sort" id="sort" onChange={sortHandler}>
            <option>Sort by</option>
            <option value="asc">Date ascending</option>
            <option value="desc">Date descending</option>
          </select>
        </label>
      </div>
      <div>
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div>Task: {todo.task}</div>
              <div>Date: {todo.date.toLocaleString()}</div>
              <button onClick={() => deleteHandler(todo.id)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
      <div></div>
    </div>
  );
}

export default App;
