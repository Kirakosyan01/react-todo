import './taskMainForm.css';
function TaskMainForm({task, tasks, setEditValue, setEditId, setTasks}){

    function handleEdit(taskId) {
        const taskToEdit = tasks.find((task) => task.id === taskId);
        setEditId(taskId);
        setEditValue(taskToEdit.text);
      }
      function handleIsCompleted(taskId) {
        const newTasks = tasks.map((task) =>
          task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
        );
        setTasks(newTasks);
      }
      function handleDeleteTask(taskId) {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
      }

    return (
        <>
        <p
          onClick={() => handleIsCompleted(task.id)}
          className={`text ${task.isCompleted ? "completed" : ""}`}
        >
          {task.text}
        </p>
        <div className="buttons">
          <button
            onClick={() => handleDeleteTask(task.id)}
            className="deleteBtn"
          >
            Delete
          </button>
          <button
            onClick={() => handleEdit(task.id)}
            className="editBtn"
          >
            Edit
          </button>
        </div>
      </>
    )
}

export default TaskMainForm;