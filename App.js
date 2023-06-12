import "./App.css";
import { useState } from "react";
import { Item } from "./Item";
import { Form } from "./Form";

const App = () => {
  const [value, setValue] = useState(" ");
  const [tasks, setTasks] = useState([
    { id: 1, task: "Walk the dog", isCompleted: false },
    { id: 2, task: "Grocery shopping", isCompleted: false },
    { id: 3, task: "Make the bed", isCompleted: false },
    { id: 4, task: "Cook pasta", isCompleted: false },
  ]);
  const handleClick = () => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, task: value, isCompleted: false },
    ]);
    setValue(" ");
  };
  const handleIsComplete = (id) => {
    const foundTask = tasks.find((task) => task.id === id);
    foundTask.isCompleted = !foundTask.isCompleted;

    const newTasks = tasks.map((task) => (task.id === id ? foundTask : task));

    setTasks(newTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1> To-Do List</h1>
        </header>
        {tasks.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            task={item.task}
            isCompleted={item.isCompleted}
            handleIsComplete={handleIsComplete}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <Form value={value} setValue={setValue} handleClick={handleClick} />
    </>
  );
};

export default App;
