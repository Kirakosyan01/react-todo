import './taskMainForm.css';
function TaskMainForm({task, tasks, setEditValue, setEditId, setTasks, isDarkMode}){

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
        <p className={isDarkMode ? 'pDark' : null} style={{fontSize:'11px',width:'50px', marginBottom:'19px',}}>{task.time}</p>
        <p
          onClick={() => handleIsCompleted(task.id)}
          className={`text ${isDarkMode ? 'pDark' : null} ${task.isCompleted ? "completed" : ""}`}
        >
          {task.text}
        </p>
        <div className="buttons">
          <button
            onClick={() => handleDeleteTask(task.id)}
            className={isDarkMode ? 'deleteBtnDark' : 'deleteBtn'}
          >
            Delete
          </button>
          <button
            onClick={() => handleEdit(task.id)}
            className={isDarkMode ? 'editBtnDark' : 'editBtn'}
          >
            Edit
          </button>
        </div>
      </>
    )
}

export default TaskMainForm;