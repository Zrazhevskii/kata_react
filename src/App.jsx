import React, { useState, useEffect } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

export default function App() {
   const [tasks, setTasks] = useState([
      { idTask: 1, task: 'Сделать машину', active: true, created: new Date(2023, 7, 1, 10, 28, 15) },
      { idTask: 2, task: 'Купить подарок', active: true, created: new Date(2024, 6, 2, 18, 5, 34) },
   ]);

   const activeCount = tasks.filter((elem) => elem.active).length;

   const [filterTasks, setfilterTasks] = useState(tasks);

   useEffect(() => {
      setfilterTasks(tasks);
   }, [tasks]);

   const idNumber = () => {
      const randomNumber1 = Math.floor(Math.random() * 1000);
      const randomNumber2 = Math.floor(Math.random() * 10000);
      return randomNumber1 + randomNumber2;
   };

   const createTask = (valueForm) => {
      const time = new Date();
      setTasks((prevTasks) => [...prevTasks, { idTask: idNumber(), task: valueForm, active: true, created: time }]);
   };

   const clearTasksCompleted = () => {
      setTasks(tasks.filter((item) => item.active));
   };

   const deletTask = (id) => {
      setTasks(tasks.filter((item) => item.idTask !== id));
   };

   const updateTask = (id, text) => {
      setTasks(tasks.map((elem) => (elem.idTask === id ? { ...elem, task: text } : { ...elem })));
   };

   const updateStatus = (status) => {
      let updateCallbuck;
      if (status === 'Active') {
         updateCallbuck = tasks.filter((item) => item.active);
      } else if (status === 'Completed') {
         updateCallbuck = tasks.filter((item) => !item.active);
      } else {
         updateCallbuck = tasks;
      }
      return setfilterTasks(updateCallbuck);
   };

   const toggleChecked = (item) => {
      setTasks(tasks.map((elem) => (elem === item ? { ...elem, active: !elem.active } : { ...elem })));
   };

   return (
      <section className="todoapp">
         <NewTaskForm createTask={createTask} />
         <section className="main">
            <TaskList data={filterTasks} deletTask={deletTask} toggleChecked={toggleChecked} updateTask={updateTask} />
            <Footer clearTasksCompleted={clearTasksCompleted} updateStatus={updateStatus} activeCount={activeCount} />
         </section>
      </section>
   );
}
