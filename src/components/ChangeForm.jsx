import React, { useContext, useState } from 'react';
import Context from './Context';
import Valid from './NewTaskForm/Valid';

export default function ChangeForm(props) {
   const { changeTask } = props;
   const { idTask, task } = props.props;
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
         ></input>
      </form>
   );
}
