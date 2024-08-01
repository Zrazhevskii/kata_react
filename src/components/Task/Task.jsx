import { useContext, useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import Context from '../Context';
import ChangeForm from '../ChangeForm';

export default function Task({ item }) {
   const { idTask, task, active, created } = item;
   const [date, setDate] = useState(formatDistanceToNow(created));
   const [changeTask, setChangeTask] = useState(false);

   useEffect(() => {
      const interval = setInterval(() => {
         setDate(formatDistanceToNow(created));
      }, 5000);
      return () => clearInterval(interval);
   }, [created]);

   const value = useContext(Context);
   const { tasks, setTasks, deletTask } = value;

   const toggleChecked = () => {
      setTasks(tasks.map((elem) => (elem === item ? { ...elem, active: !elem.active } : { ...elem })));
   };

   const description = active ? '' : 'description';
   const view = changeTask ? 'completed editing' : 'completed';

   const handleChangeTask = () => {
      setChangeTask((prevTask) => !prevTask);
   };

   return (
      <li className={view}>
         <div className="view">
            <input id={idTask} className="toggle" type="checkbox" checked={!active} onChange={toggleChecked} />
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <label htmlFor={idTask} onClick={toggleChecked} onKeyDown={toggleChecked}>
               <span className={description}>{task}</span>
               <span className="created">created {date} ago</span>
            </label>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="icon icon-edit" onClick={handleChangeTask} />
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="icon icon-destroy" onClick={() => deletTask(idTask)} />
         </div>
         {changeTask && <ChangeForm data={item} changeTask={handleChangeTask} />}
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
};
