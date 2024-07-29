import React, { useState } from 'react';
import './NewTaskForm.css';
import Valid from './Valid';
import TaskList from '../TaskList/TaskList';
// import Context from '../Context'

export default function NewTaskForm() {
    const [valueForm, setValueForm] = useState('');
    const [tasks, setTasks] = useState([
        { task: 'Сделать машину', },
        { task: 'Купить продукты', },
    ]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setValueForm(evt.target.value);
    };

    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter' && Valid(valueForm)) {
            // console.log('вроде все получилось');
            setTasks((prevTasks) => [...prevTasks, {task: valueForm}])
            setValueForm('');
        }
    };

    return (
        <>
            <header className='header'>
                <h1>todos</h1>
                <input
                    className='new-todo'
                    name='valueForm'
                    value={valueForm}
                    placeholder='What needs to be done?'
                    onChange={handleSubmit}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            </header>
            <TaskList data={tasks} />
        </>
    );
}
