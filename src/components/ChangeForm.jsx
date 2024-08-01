import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Valid from './NewTaskForm/Valid';

export default function ChangeForm(props) {
   const { changeTask, data } = props;
   const { idTask, task } = data;
   const value = useContext(Context);
   const { tasks, setTasks } = value;
   const [text, setText] = useState(task);

   const updateTask = (evt) => {
      evt.preventDefault();
      setText(evt.target.value);
   };

   const handleChange = (evt) => {
      if (evt.key === 'Enter' && Valid(text)) {
         setTasks(tasks.map((elem) => (elem.idTask === idTask ? { ...elem, task: text } : { ...elem })));
         changeTask();
      }
   };

   return (
      <form>
         <input
            type="text"
            className="edit"
            value={text}
            onChange={(evt) => updateTask(evt)}
            onKeyDown={(evt) => handleChange(evt)}
         />
      </form>
   );
}

ChangeForm.propTypes = {
   changeTask: PropTypes.func,
   data: PropTypes.shape({
      idTask: PropTypes.number,
      task: PropTypes.string,
      props: PropTypes.element,
   }),
};
