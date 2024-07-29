import React from 'react';
import './TaskList.css';
import Footer from '../Footer/Footer';
import Task from '../Task/Task';

export default function TaskList({ data }) {
    
    const id = () => {
        const randomNumber1 = Math.floor(Math.random() * 1000);
        const randomNumber2 = Math.floor(Math.random() * 10000);
        return randomNumber1 + randomNumber2;
    };

    return (
        <section className='main'>
            <ul className='todo-list'>
                {
                    data.map(item => {
                        return <Task item={item} key={id()}/>
                    })
                }
            </ul>
            <Footer />
        </section>
    );
}
