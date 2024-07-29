import React from 'react';

export default function Task({ item }) {
    // console.log(item);
    const task = item.task;
    return (
        <li className='completed'>
            <div className='view'>
                <input className='toggle' type='checkbox' />
                <label>
                    <span className='description'>{task}</span>
                    <span className='created'>created 17 seconds ago</span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy'></button>
            </div>
        </li>
    );
}
