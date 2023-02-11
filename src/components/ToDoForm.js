const ToDoForm = ({ submit, changeHandler }) => {
  return (
    <form onSubmit={submit}>
      <label htmlFor="type">Type:</label>
      <select name="type" id="type" onChange={changeHandler}>
        <option>Select type</option>
        <option value="task">Task</option>
        <option value="reminder">Reminder</option>
      </select>
      <label htmlFor="task">Task:</label>
      <input type="text" id="task" name="task" onChange={changeHandler} />
      <button type="submit">Add task</button>
    </form>
  );
};

export default ToDoForm;
