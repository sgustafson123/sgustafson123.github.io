export const Form = ({ value, setValue, handleClick }) => {
  return (
    <form>
      <label> Add task: </label>
      <input
        type="text"
        name="task"
        id="task"
        onChange={(Event) => setValue(Event.target.value)}
        value={value}
      />
      <button type="button" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
};
