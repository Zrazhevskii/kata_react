// import { useState } from 'react';
import './TaskList.css';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

export default function TaskList({ data, deletTask, toggleChecked, updateTask }) {
   return (
      <ul className="todo-list">
         {data.map((item) => {
            return (
               <Task
                  item={item}
                  deletTask={deletTask}
                  toggleChecked={toggleChecked}
                  updateTask={updateTask}
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
};
