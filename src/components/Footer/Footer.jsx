import React, { useContext, useState } from 'react';
import './Footer.css';
import Context from '../Context';

export default function Footer({ activeItems, completedItems, allItems }) {
    const value = useContext(Context);
    
    const { tasks } = value;
    let item = tasks.filter((elem) => elem.active === true).length;

    const [classActive, setClassActive] = useState({
        all: 'selected',
        itemActive: '',
        itemCompleted: '',
    });
    const { all, itemActive, itemCompleted } = classActive;

    const handlerClickActive = () => {
        setClassActive({
            all: '',
            itemActive: 'selected',
            itemCompleted: '',
        })
        activeItems();
    };

    const handleClickCompleted = () => {
        setClassActive({
            all: '',
            itemActive: '',
            itemCompleted: 'selected',
        })
        completedItems();
    };

    const handleClickAll = () => {
        setClassActive({
            all: 'selected',
            itemActive: '',
            itemCompleted: '',
        })
        allItems();
    };

    return (
        <footer className='footer'>
            <span className='todo-count'>{item} items left</span>
            <ul className='filters'>
                <li>
                    <button className={all} onClick={handleClickAll}>
                        All
                    </button>
                </li>
                <li>
                    <button className={itemActive} onClick={handlerClickActive}>
                        Active
                    </button>
                </li>
                <li>
                    <button className={itemCompleted} onClick={handleClickCompleted}>
                        Completed
                    </button>
                </li>
            </ul>
            <button className='clear-completed'>Clear completed</button>
        </footer>
    );
}
