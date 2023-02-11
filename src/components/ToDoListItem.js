const ToDoListItem = ({ item, update }) => {
  return (
    <li key={item.id} className={` ${item.type ? item.type : ""} item`}>
      <div>Task: {item.task}</div>
      <div>Date: {new Date(item.date).toLocaleString()}</div>
      <button onClick={() => update(item.id)}>Delete</button>
    </li>
  );
};

export default ToDoListItem;
