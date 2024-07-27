import { useState } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <section className='todoapp'>
            <NewTaskForm />
        </section>
    );
}

export default App;
