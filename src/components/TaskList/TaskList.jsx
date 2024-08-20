// import { useState } from 'react';
import './TaskList.css';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

export default function TaskList({ data, deletTask, toggleChecked, updateTask, startCountDownTimer }) {
   return (
      <ul className="todo-list">
         {data.map((item) => {
            return (
               <Task
                  item={item}
                  deletTask={deletTask}
                  toggleChecked={toggleChecked}
                  updateTask={updateTask}
                  startCountDownTimer={startCountDownTimer}
                  // stopCountDownTimer={stopCountDownTimer}
                  key={item.idTask}
               />
            );
         })}
      </ul>
   );
}

TaskList.propTypes = {
   data: PropTypes.arrayOf(
      PropTypes.shape({
         idTask: PropTypes.number.isRequired,
      }),
   ),
   deletTask: PropTypes.func.isRequired,
   toggleChecked: PropTypes.func.isRequired,
   updateTask: PropTypes.func.isRequired,
   startCountDownTimer: PropTypes.func.isRequired,
   // stopCountDownTimer: PropTypes.func.isRequired,
};
