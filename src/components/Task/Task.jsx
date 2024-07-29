import React, { useContext } from 'react';
import Context from '../Context';

export default function Task({ item }) {
    let { task, active }= item;

    const value = useContext(Context);
    let {tasks, setTasks} = value;

    const toggleChecked = () => {
        setTasks(tasks.map(e => {
            if (e === item) {
                e.active = !e.active;
            }
            return e;
        }));
    };

    const description = active ? '' : 'description';
    
    return (
        <li className='completed'>
            <div className='view'>
                <input
                    className='toggle'
                    type='checkbox'
                    checked={!active}
                    onChange={() => console.log('sssssss')}
                />
                <label>
                    <span className={description} onClick={toggleChecked}>
                        {task}
                    </span>
                    <span className='created' onClick={toggleChecked}>created 17 seconds ago</span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy'></button>
            </div>
        </li>
    );
}
