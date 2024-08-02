import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import ChangeForm from '../ChangeForm';

export default function Task({ item, deletTask, toggleChecked, updateTask }) {
   const { idTask, task, active, created } = item;
   const [date, setDate] = useState(formatDistanceToNow(created));
   const [changeClass, setChangeClass] = useState(false);

   useEffect(() => {
      const interval = setInterval(() => {
         setDate(formatDistanceToNow(created));
      }, 5000);
      return () => clearInterval(interval);
   }, [created]);

   const description = active ? '' : 'description';
   const view = changeClass ? 'completed editing' : 'completed';

   const handleChangeClass = () => {
      setChangeClass((prevTask) => !prevTask);
   };

   return (
      <li className={view}>
         <div className="view">
            <input
               id={idTask}
               className="toggle"
               type="checkbox"
               checked={!active}
               onChange={() => toggleChecked(item)}
            />
            <label htmlFor={idTask}>
               <span className={description}>{task}</span>
               <span className="created">created {date} ago</span>
            </label>
            <button type="button" aria-label="Edit task" className="icon icon-edit" onClick={handleChangeClass} />
            <button
               type="button"
               aria-label="Delete task"
               className="icon icon-destroy"
               onClick={() => deletTask(idTask)}
            />
         </div>
         {changeClass && <ChangeForm updateTask={updateTask} changeClassName={handleChangeClass} data={item} />}
      </li>
   );
}

Task.propTypes = {
   item: PropTypes.shape({
      idTask: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      created: PropTypes.instanceOf(Date),
   }),
   updateTask: PropTypes.func.isRequired,
   deletTask: PropTypes.func.isRequired,
   toggleChecked: PropTypes.func.isRequired,
};
