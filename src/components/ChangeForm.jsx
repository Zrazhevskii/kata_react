import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ChangeForm(props) {
   const { updateTask, changeClassName, data } = props;
   const { idTask, task } = data;
   const [text, setText] = useState(task);

   const updateTaskForm = (evt) => {
      evt.preventDefault();
      setText(evt.target.value);
   };

   const createUpdateTask = () => {
      if (text.trim() !== '') {
         updateTask(idTask, text);
         changeClassName();
      }
   };

   return (
      <form onSubmit={createUpdateTask}>
         <input type="text" className="edit" value={text} onChange={(evt) => updateTaskForm(evt)} required />
      </form>
   );
}

ChangeForm.propTypes = {
   changeClassName: PropTypes.func,
   updateTask: PropTypes.func.isRequired,
   data: PropTypes.shape({
      idTask: PropTypes.number,
      task: PropTypes.string,
      props: PropTypes.element,
   }),
};
