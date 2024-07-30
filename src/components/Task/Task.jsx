import { useContext, useEffect, useState } from 'react';
import Context from '../Context';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default function Task({ item }) {
    let { idTask, task, active, created } = item;
    const [date, setDate] = useState(formatDistanceToNow(created));

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(formatDistanceToNow(created));
        }, 5000);
        return () => clearInterval(interval);
    }, [created]);

    const value = useContext(Context);
    let { tasks, setTasks, deletTask } = value;

    const toggleChecked = () => {
        setTasks(
            tasks.map((e) =>
                e === item ? { ...e, active: !e.active } : { ...e }
            )
        );
    };

    const description = active ? '' : 'description';

    return (
        <li className='completed'>
            <div className='view'>
                <input
                    id={idTask}
                    className='toggle'
                    type='checkbox'
                    checked={!active}
                    onChange={toggleChecked}
                />
                <label htmlFor={idTask}>
                    <span className={description} onClick={toggleChecked}>
                        {task}
                    </span>
                    <span className='created'>
                        created {date} ago
                    </span>
                </label>
                <button className='icon icon-edit'></button>
                <button
                    className='icon icon-destroy'
                    onClick={() => deletTask(idTask)}
                ></button>
            </div>
        </li>
    );
}

Task.propTypes = {
    item: PropTypes.shape({
        idTask: PropTypes.number.isRequired,
        task: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
    }),
};
