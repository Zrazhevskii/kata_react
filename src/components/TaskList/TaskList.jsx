import React from 'react';
import './TaskList.css';
import Footer from '../Footer/Footer'

export default function TaskList() {

    return (
        <section className='main'>
            <ul className='todo-list'>
                <li className='completed'>
                    <div className='view'>
                        <input className='toggle' type='checkbox' />
                        <label>
                            <span className='description'>Completed task</span>
                            <span className='created'>created 17 seconds ago</span>
                        </label>
                        <button className='icon icon-edit'></button>
                        <button className='icon icon-destroy'></button>
                    </div>
                </li>
            </ul>
            <Footer />
        </section>
    );
}
