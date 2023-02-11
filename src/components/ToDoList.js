import { useCallback } from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ items, update }) => {
  const todos = items;
  const setTodos = update;

  const deleteHandler = useCallback(
    (id) => {
      setTodos([...todos.filter((item) => item.id !== id)]);
    },
    [todos, setTodos]
  );

  const sortHandler = (e) => {
    setTodos([
      ...todos.sort((a, b) =>
        e.target.value === "asc" ? a.date - b.date : b.date - a.date
      ),
    ]);
  };

  return (
    <div>
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
            <ToDoListItem item={todo} key={todo.id} update={deleteHandler} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
