import { useContext } from 'react';
import Context from '../Context';
import PropTypes from 'prop-types';

export default function Task({ item }) {
    let { idTask, task, active } = item;

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
                    className='toggle'
                    type='checkbox'
                    checked={!active}
                    onChange={() => console.log('sssssss')}
                />
                <label>
                    <span className={description} onClick={toggleChecked}>
                        {task}
                    </span>
                    <span className='created' onClick={toggleChecked}>
                        created 17 seconds ago
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
