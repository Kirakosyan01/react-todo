import { useState } from 'react';
import './taskForm.css';

function TaskForm({tasks, setTasks, task, setEditId, editValue, setEditValue}) {

    function handleSave(taskId) {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, text: editValue } : task
        );
        setTasks(updatedTasks);
        setEditId(null);
        setEditValue('');
    }
    function handleEditChange(e) {
        setEditValue(e.target.value);
    }
    function handleCancel() {
        setEditId(null);
        setEditValue('');
    }

    return (
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
    )
}

export default TaskForm;