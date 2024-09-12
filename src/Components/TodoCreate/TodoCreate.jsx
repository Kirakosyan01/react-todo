import TaskForm from "../TaskForm/TaskForm";
import TaskMainForm from "../TaskMainForm/TaskMainForm";
import "./todoCreate.css";
import { useState } from "react";

function TodoCreate() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  function handleValue(e) {
    setValue(e.target.value);
  }
  function handleTask(e) {
    e.preventDefault();
    if (!value) {
      return;
    }
    const newId = Date.now();
    setTasks([
      ...tasks,
      {
        id: newId,
        text: value,
        isCompleted: false,
      },
    ]);

    setValue("");
  }

  return (
    <div className="TodoCreate">
      <div className="container">
        <div className="taskCreate">
          <h2>New Todo:</h2>
          <form onSubmit={handleTask}>
            <input
              className="inputPlace"
              placeholder="Add your task..."
              type="text"
              value={value}
              onChange={handleValue}
            />
            <button className="buttonPlace">Add</button>
          </form>
        </div>
      </div>
      <div className="todoContainer">
        {tasks.map((task) => (
          <div className="todoElement" key={task.id}>
            {editId === task.id ? (
              <TaskForm
                tasks={tasks}
                setTasks={setTasks}
                task={task}
                setEditId={setEditId}
                editValue={editValue}
                setEditValue={setEditValue}
              />
            ) : (
              <TaskMainForm
                task={task}
                tasks={tasks}
                setEditValue={setEditValue}
                setEditId={setEditId}
                setTasks={setTasks}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoCreate;
