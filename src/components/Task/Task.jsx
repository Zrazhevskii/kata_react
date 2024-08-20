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
   const [countDownTimer, setCountDownTimer] = useState({
      minTimer: '',
      secTimer: '',
   });

   useEffect(() => {
      setCountDownTimer({
         minTimer: min,
         secTimer: sec,
      });
   }, []);

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
            setCountDownTimer((prev) => {
               const { minTimer, secTimer } = prev;
               if (secTimer === 0) {
                  return {
                     minTimer: minTimer - 1,
                     secTimer: 59,
                  };
               }
               return {
                  ...prev,
                  secTimer: secTimer - 1,
               };
            });
         }, 1000);
      }
      setBooleanTimer(true);
   };

   const toggleActive = () => {
      if (intervalTime.current) clearInterval(intervalTime.current);
      if (active) {
         setCountDownTimer({
            minTimer: 0,
            secTimer: 0,
         });
      }

      setBooleanTimer(false);
      toggleChecked(item);
   };

   const stopTimer = () => {
      startCountDownTimer(idTask, countDownTimer.minTimer, countDownTimer.secTimer);
      clearInterval(intervalTime.current);
      setBooleanTimer(false);
   };

   useEffect(() => {
      const { minTimer, secTimer } = countDownTimer;
      if (minTimer === 0 && secTimer === 0) {
         clearInterval(intervalTime.current);
      }
   }, [countDownTimer]);

   const deletItemTask = () => {
      if (intervalTime.current) clearInterval(intervalTime.current);
      deletTask(idTask);
   };

   return (
      <li className={view}>
         <div className="view">
            <input id={idTask} className="toggle" type="checkbox" checked={!active} onChange={toggleActive} />
            <label htmlFor={idTask}>
               <span className={description}>{task}</span>
               <span className="descrip">
                  <button type="button" aria-label="Edit task" className="icon icon-play" onClick={startPauseTimer} />
                  <button type="button" aria-label="Edit task" className="icon icon-pause" onClick={stopTimer} />
                  {countDownTimer.minTimer}:{countDownTimer.secTimer}
               </span>
               <span className="created">created {date} ago</span>
            </label>
            <button type="button" aria-label="Edit task" className="icon icon-edit" onClick={handleChangeClass} />
            <button type="button" aria-label="Delete task" className="icon icon-destroy" onClick={deletItemTask} />
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
};
