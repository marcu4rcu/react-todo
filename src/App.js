import "./App.css";
// dependencies
import { useState } from "react";
import { uuid4 as uniqueID } from "uuid4";
// compoennts
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputs, setInputs] = useState({});
  const [todos, setTodos] = useState([]);

  const inputChangeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputs.task) {
      console.warn("No input data provided, try again");
      return false;
    }

    inputs.id = uniqueID();
    inputs.date = new Date().getTime();

    setTodos([...todos, inputs]);
    setInputs({});
    e.target.reset();
  };

  return (
    <div className="App">
      <div>
        <ToDoForm submit={submitHandler} changeHandler={inputChangeHandler} />
      </div>
      <div>
        <ToDoList items={todos} update={setTodos} />
      </div>
      <div></div>
    </div>
  );
}

export default App;
