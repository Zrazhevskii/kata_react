import React from 'react';
import './TaskList.css';
import Footer from '../Footer/Footer';
import Task from '../Task/Task';

export default function TaskList() {
    return (
        <section className='main'>
            <ul className='todo-list'>
                <Task />
            </ul>
            <Footer />
        </section>
    );
}
