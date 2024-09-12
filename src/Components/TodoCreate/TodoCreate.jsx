import './todoCreate.css';
import { useState } from 'react';

function TodoCreate(){
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState('');
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');
    
    function handleValue(e){
        setValue(e.target.value)
    }
    function handleTask(e){
        e.preventDefault();
        if(!value) {return};
        const newId = Date.now();
        setTasks([...tasks, {
            id: newId,
            text: value,
            isCompleted: false,
        }]);
        
        setValue('');
    }
    function handleDeleteTask(taskId){
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
    }
    function handleIsCompleted(taskId){
        const newTasks = tasks.map(task => task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task)
        setTasks(newTasks)
    }
    function handleEdit(taskId) {
        const taskToEdit = tasks.find(task => task.id === taskId);
        setEditId(taskId);
        setEditValue(taskToEdit.text);
    }
    function handleEditChange(e) {
        setEditValue(e.target.value);
    }

function handleSave(taskId) {
    const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, text: editValue } : task
    );
    setTasks(updatedTasks);
    setEditId(null);
    setEditValue('');
}

function handleCancel() {
    setEditId(null);
    setEditValue('');
}
    return (
        <div className='TodoCreate'>
            <div className='container'>
                <div className='taskCreate'>
                    <h2>New Todo:</h2>
                    <form onSubmit={handleTask}>
                        <input
                            className='inputPlace'
                            placeholder='Add your task...'
                            type="text"
                            value={value}
                            onChange={handleValue}
                        />
                        <button className='buttonPlace'>Add</button>
                    </form>
                </div>
            </div>
            <div className='todoContainer'>
                {tasks.map((task) => (
                    <div className='todoElement' key={task.id}>
                        {editId === task.id ? (
                            <form onSubmit={(e) => { e.preventDefault(); handleSave(task.id); }}>
                                <input
                                    className='editInput'
                                    type="text"
                                    value={editValue}
                                    onChange={handleEditChange}
                                />
                                <button className='saveBtn' type="submit">Save</button>
                                <button className='cancelBtn' type="button" onClick={handleCancel}>Cancel</button>
                            </form>
                        ) : (
                            <>
                                <p
                                    onClick={() => handleIsCompleted(task.id)}
                                    className={`text ${task.isCompleted ? 'completed' : ''}`}
                                >
                                    {task.text}
                                </p>
                                <div className='buttons'>
                                    <button onClick={() => handleDeleteTask(task.id)} className='deleteBtn'>Delete</button>
                                    <button onClick={() => handleEdit(task.id)} className='editBtn'>Edit</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoCreate;



