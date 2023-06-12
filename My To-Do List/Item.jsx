export const Item = ({
  task,
  isCompleted,
  handleIsComplete,
  id,
  handleDelete,
}) => {
  return (
    <ul>
      <li className={isCompleted ? "completed" : " "}>{task}</li>
      <button onClick={() => handleIsComplete(id)}>
        {isCompleted ? "❌" : "✅"}{" "}
      </button>
      <button onClick={() => handleDelete(id)}> 🗑 </button>
    </ul>
  );
};
