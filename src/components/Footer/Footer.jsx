import { useState } from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

export default function Footer({ clearTasksCompleted, updateStatus, activeCount }) {
   const [classActive, setClassActive] = useState({
      all: 'selected',
      itemActive: '',
      itemCompleted: '',
   });
   const { all, itemActive, itemCompleted } = classActive;

   const handleChangeStatus = (evt) => {
      const valueStatus = evt.target.textContent;
      if (valueStatus === 'All') {
         setClassActive({
            all: 'selected',
            itemActive: '',
            itemCompleted: '',
         });
      } else if (valueStatus === 'Active') {
         setClassActive({
            all: '',
            itemActive: 'selected',
            itemCompleted: '',
         });
      } else if (valueStatus === 'Completed') {
         setClassActive({
            all: '',
            itemActive: '',
            itemCompleted: 'selected',
         });
      }
      updateStatus(valueStatus);
   };

   return (
      <footer className="footer">
         <span className="todo-count">{activeCount} items left</span>
         <ul className="filters">
            <li>
               <button type="button" className={all} onClick={(evt) => handleChangeStatus(evt)}>
                  All
               </button>
            </li>
            <li>
               <button type="button" className={itemActive} onClick={(evt) => handleChangeStatus(evt)}>
                  Active
               </button>
            </li>
            <li>
               <button type="button" className={itemCompleted} onClick={(evt) => handleChangeStatus(evt)}>
                  Completed
               </button>
            </li>
         </ul>
         <button type="button" className="clear-completed" onClick={clearTasksCompleted}>
            Clear completed
         </button>
      </footer>
   );
}

Footer.propTypes = {
   clearTasksCompleted: PropTypes.func.isRequired,
   updateStatus: PropTypes.func.isRequired,
   activeCount: PropTypes.number.isRequired,
};
