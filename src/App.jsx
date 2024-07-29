// import { useState } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
// import TaskList from './components/TaskList/TaskList'

function App() {
    return (
        <section className='todoapp'>
            <NewTaskForm />
        </section>
    );
}

export default App;
