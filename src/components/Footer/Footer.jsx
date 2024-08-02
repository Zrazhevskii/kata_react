import { useState } from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

export default function Footer({ activeItems, completedItems, allItems, clearTasksCompleted, activeCount }) {
   const [classActive, setClassActive] = useState({
      all: 'selected',
      itemActive: '',
      itemCompleted: '',
   });
   const { all, itemActive, itemCompleted } = classActive;

   const handleChangeStatus = (evt) => {
      if (evt.target.textContent === 'All') {
         setClassActive({
            all: 'selected',
            itemActive: '',
            itemCompleted: '',
         });
         allItems();
      } else if (evt.target.textContent === 'Active') {
         setClassActive({
            all: '',
            itemActive: 'selected',
            itemCompleted: '',
         });
         activeItems();
      } else if (evt.target.textContent === 'Completed') {
         setClassActive({
            all: '',
            itemActive: '',
            itemCompleted: 'selected',
         });
         completedItems();
      }
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
   activeItems: PropTypes.func.isRequired,
   completedItems: PropTypes.func.isRequired,
   allItems: PropTypes.func.isRequired,
   clearTasksCompleted: PropTypes.func.isRequired,
   activeCount: PropTypes.number.isRequired,
};
