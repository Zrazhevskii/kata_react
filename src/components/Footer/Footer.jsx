import { useContext, useState } from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
import Context from '../Context';

export default function Footer({ activeItems, completedItems, allItems }) {
   const value = useContext(Context);

   const { tasks, clearTasksCompleted } = value;
   const item = tasks.filter((elem) => elem.active).length;

   const [classActive, setClassActive] = useState({
      all: 'selected',
      itemActive: '',
      itemCompleted: '',
   });
   const { all, itemActive, itemCompleted } = classActive;

   const handlerClickActive = () => {
      setClassActive({
         all: '',
         itemActive: 'selected',
         itemCompleted: '',
      });
      activeItems();
   };

   const handleClickCompleted = () => {
      setClassActive({
         all: '',
         itemActive: '',
         itemCompleted: 'selected',
      });
      completedItems();
   };

   const handleClickAll = () => {
      setClassActive({
         all: 'selected',
         itemActive: '',
         itemCompleted: '',
      });
      allItems();
   };

   return (
      <footer className="footer">
         <span className="todo-count">{item} items left</span>
         <ul className="filters">
            <li>
               <button type="button" className={all} onClick={handleClickAll}>
                  All
               </button>
            </li>
            <li>
               <button type="button" className={itemActive} onClick={handlerClickActive}>
                  Active
               </button>
            </li>
            <li>
               <button type="button" className={itemCompleted} onClick={handleClickCompleted}>
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
};
