import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

export default function NewTaskForm({ createTask }) {
   const [valueForm, setValueForm] = useState('');

   const handleChange = (evt) => {
      setValueForm(evt.target.value);
   };

   const handleSubmit = (evt) => {
      evt.preventDefault();
      if (valueForm.trim() !== '') {
         createTask(valueForm);
         setValueForm('');
      }
   };

   return (
      <header className="header">
         <h1>todos</h1>
         <form onSubmit={handleSubmit} className="new-todo-form">
            <input
               className="new-todo"
               name="valueForm"
               value={valueForm}
               placeholder="What needs to be done?"
               onChange={handleChange}
               autoFocus
               required
            />
            <input className="new-todo-form__timer" placeholder="Min" autoFocus />
            <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
         </form>
      </header>
   );
}

NewTaskForm.propTypes = {
   createTask: PropTypes.func,
};
