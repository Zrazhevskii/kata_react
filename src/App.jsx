// import { useState } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
// import TaskList from './components/TaskList/TaskList'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <section className='todoapp'>
            <NewTaskForm />
            {/* <TaskList /> */}
        </section>
    );
}

export default App;
