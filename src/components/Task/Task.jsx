import { useEffect, useRef, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import ChangeForm from '../ChangeForm';

export default function Task({ item, deletTask, toggleChecked, updateTask, startCountDownTimer }) {
   const { idTask, task, active, created, min, sec } = item;
   const [date, setDate] = useState(formatDistanceToNow(created));
   const [changeClass, setChangeClass] = useState(false);
   const [booleanTimer, setBooleanTimer] = useState(false);
   const intervalTime = useRef(null);
   // const [buttonClass, setbuttonClass] = useState('icon icon-play');

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

   const startPauseTimer = () => {
      if (!active) return;
      if (min === 0 && sec === 0) return;
      if (!booleanTimer) {
         intervalTime.current = setInterval(() => {
            startCountDownTimer(idTask);
         }, 1000);
      }
      setBooleanTimer(true);
   };

   const toggleActive = () => {
      clearInterval(intervalTime.current);
      setBooleanTimer(false);
      toggleChecked(item);
   };

   const stopTimer = () => {
      clearInterval(intervalTime.current);
      setBooleanTimer(false);
   };

   useEffect(() => {
      if (min === 0 && sec === 0) {
         clearInterval(intervalTime.current);
         // console.log('закончили упражнение');
      }
   }, [min, sec]);

   return (
      <li className={view}>
         <div className="view">
            <input id={idTask} className="toggle" type="checkbox" checked={!active} onChange={toggleActive} />
            <label htmlFor={idTask}>
               <span className={description}>{task}</span>
               <span className="descrip">
                  <button type="button" aria-label="Edit task" className="icon icon-play" onClick={startPauseTimer} />
                  <button type="button" aria-label="Edit task" className="icon icon-pause" onClick={stopTimer} />
                  {min}:{sec}
               </span>
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
      min: PropTypes.number,
      sec: PropTypes.number,
   }),
   updateTask: PropTypes.func.isRequired,
   deletTask: PropTypes.func.isRequired,
   toggleChecked: PropTypes.func.isRequired,
   startCountDownTimer: PropTypes.func.isRequired,
   // stopCountDownTimer: PropTypes.func.isRequired,
};
