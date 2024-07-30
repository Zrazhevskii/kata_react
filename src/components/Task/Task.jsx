import { useContext, useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import Context from '../Context';

export default function Task({ item }) {
   const { idTask, task, active, created } = item;
   const [date, setDate] = useState(formatDistanceToNow(created));

   useEffect(() => {
      const interval = setInterval(() => {
         setDate(formatDistanceToNow(created));
      }, 5000);
      return () => clearInterval(interval);
   }, [created]);

   const value = useContext(Context);
   const { tasks, setTasks, deletTask } = value;

   const toggleChecked = () => {
      setTasks(tasks.map((e) => (e === item ? { ...e, active: !e.active } : { ...e })));
   };

   const description = active ? '' : 'description';

   return (
      <li className="completed">
         <div className="view">
            <input id={idTask} className="toggle" type="checkbox" checked={!active} onChange={toggleChecked} />
            <label htmlFor={idTask} onClick={toggleChecked} onKeyDown={toggleChecked}>
               <span className={description}>{task}</span>
               <span className="created">created {date} ago</span>
            </label>
            <button type="button" className="icon icon-edit" />
            <button type="button" className="icon icon-destroy" onClick={() => deletTask(idTask)} />
         </div>
      </li>
   );
}

Task.propTypes = {
   item: PropTypes.shape({
      idTask: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      created: PropTypes.object,
   }),
};
