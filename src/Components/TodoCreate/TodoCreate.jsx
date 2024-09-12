import TaskForm from "../TaskForm/TaskForm";
import TaskMainForm from "../TaskMainForm/TaskMainForm";
import "./todoCreate.css";
import { useState } from "react";
import DayMode from '../../assets/day-mode.png';
import NightMode from '../../assets/night-mode.png';

function TodoCreate() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleValue(e) {
    setValue(e.target.value);
  }
  function handleTask(e) {
    e.preventDefault();
    if (!value) {
      return;
    }
    const newId = Date.now();
    const taskTime = new Date().toLocaleString();
    setTasks([
      ...tasks,
      {
        id: newId,
        text: value,
        time: taskTime,
        isCompleted: false,
      },
    ]);

    setValue("");
  }
  function HandleDayMode(e){
    e.preventDefault();
    setIsDarkMode(!isDarkMode)

  }

  return (
    <div className={isDarkMode ? 'TodoCreateDark' : 'TodoCreate'}>
      <div className={isDarkMode ? 'containerDark' : 'container'}>
        <a onClick={HandleDayMode} href="#" style={{position:'absolute', right:'30px', top:'10px'}}><img className="brightness" src={isDarkMode ? DayMode : NightMode} alt="Night Mode"/></a>
        <div className={isDarkMode ? 'taskCreateDark' : 'taskCreate'}>
          <h2 className={isDarkMode ? 'h2Dark' : null}>New Todo:</h2>
          <form onSubmit={handleTask}>
            <input
              className="inputPlace"
              placeholder="Add your task..."
              type="text"
              value={value}
              onChange={handleValue}
            />
            <button className={isDarkMode ? 'buttonPlaceDark' : 'buttonPlace'}>Add</button>
          </form>
        </div>
      </div>
      <div className="todoContainer">
        {tasks.map((task) => (
          <div className={isDarkMode ? 'todoElementDark' : 'todoElement'} key={task.id}>
            {editId === task.id ? (
              <TaskForm
                tasks={tasks}
                setTasks={setTasks}
                task={task}
                setEditId={setEditId}
                editValue={editValue}
                setEditValue={setEditValue}
                isDarkMode={isDarkMode}
              />
            ) : (
              <TaskMainForm
                task={task}
                tasks={tasks}
                setEditValue={setEditValue}
                setEditId={setEditId}
                setTasks={setTasks}
                isDarkMode={isDarkMode}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoCreate;
