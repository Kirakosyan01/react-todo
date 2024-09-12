import './todoCreate.css';
import { useState } from 'react';

function TodoCreate(){
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState('');
    
    function handleValue(e){
        setValue(e.target.value)
    }
    function handleTask(e){
        e.preventDefault();
        if(!value) {return}
        setTasks([...tasks, {
            id: tasks.length,
            text: value,
        }]);
        
        setValue('');
    }
    function handleDeleteTask(taskId){
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
    }
    function handleEditTask(){

    }

    return (
        <div className='TodoCreate'>
            <div className='container'>
                <div className='taskCreate'>
                    <h2>New Todo:</h2>
                    <form onSubmit={handleTask}>
                    <input  className='inputPlace' placeholder='Please, write your task here' type="text" value={value} onChange={handleValue}/>
                    <button className='buttonPlace'>Add</button>
                    </form>
                </div>
            </div>
                    <div className='todoContainer'>
                        {tasks.map((task) => {
                                return (<div className='todoElement' key={task.id}>
                                    <p className='text'>{task.text}</p>
                                    <div className='buttons'>
                                    <button onClick={() => handleDeleteTask(task.id)} className='deleteBtn'>Delete</button>
                                    <button className='editBtn'>Edit</button>
                                    </div>
                                </div>)
                        })}
                    </div>
        </div>
    )
}

export default TodoCreate;