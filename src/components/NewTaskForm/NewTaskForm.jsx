import React, { useState, useEffect } from 'react';
import './NewTaskForm.css';
import Valid from './Valid';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';
import Context from '../Context'

export default function NewTaskForm() {
    const [valueForm, setValueForm] = useState('');
    // const [classActive, setClassActive] = useState({
    //     all: 'selected',
    //     itemActive: '',
    //     itemCompleted: '',
    // })

    const [tasks, setTasks] = useState([
        { task: 'Сделать машину', active: true },
        { task: 'Купить продукты', active: true },
        { task: 'Помыть посуду', active: true },
    ]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setValueForm(evt.target.value);
    };

    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter' && Valid(valueForm)) {
            setTasks((prevTasks) => [...prevTasks, { task: valueForm, active: true }]);
            setValueForm('');
        }
    };

    const value = {
        tasks,
        setTasks,
    }

    return (
        <Context.Provider value={value}>
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
        </Context.Provider>
    );
}
