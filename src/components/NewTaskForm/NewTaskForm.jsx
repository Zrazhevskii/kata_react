import { useState } from 'react';
import './NewTaskForm.css';
import Valid from './Valid';
import TaskList from '../TaskList/TaskList';
import Context from '../Context';

export default function NewTaskForm() {
    const [valueForm, setValueForm] = useState('');

    const [tasks, setTasks] = useState([
        {idTask: 1, task: 'Сделать машину', active: true },
        {idTask: 2, task: 'Купить продукты', active: true },
        {idTask: 3, task: 'Помыть посуду', active: true },
    ]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setValueForm(evt.target.value);
    };

    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter' && Valid(valueForm)) {

            const id = () => {
                const randomNumber1 = Math.floor(Math.random() * 1000);
                const randomNumber2 = Math.floor(Math.random() * 10000);
                return randomNumber1 + randomNumber2;
            };

            setTasks((prevTasks) => [
                ...prevTasks,
                {idTask: id(), task: valueForm, active: true },
            ]);
            setValueForm('');
        }
    };

    const clearTasksCompleted = () => {
        setTasks(tasks.filter((item) => item.active === true));
    };

    const deletTask = (id) => {
        setTasks(tasks.filter((item) => item.idTask !== id));
    };

    const value = {
        tasks,
        setTasks,
        clearTasksCompleted,
        deletTask,
    };

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
            <TaskList />
        </Context.Provider>
    );
}
