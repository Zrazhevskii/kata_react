import { useContext, useState, useEffect } from 'react';
import './TaskList.css';
import Footer from '../Footer/Footer';
import Task from '../Task/Task';
import Context from '../Context';

export default function TaskList() {
    const value = useContext(Context);
    const data = value.tasks;
    const [newArr, setNewArr] = useState([]);

    useEffect(() => {
        setNewArr(data);
    }, [data]);

    const activeItems = () => {
        setNewArr(data.filter((item) => item.active === true));
    };

    const completedItems = () => {
        setNewArr(data.filter((item) => item.active === false));
    };

    const allItems = () => {
        setNewArr(data);
    };

    return (
        <section className='main'>
            <ul className='todo-list'>
                {newArr.map((item) => {
                    return <Task item={item} key={item.idTask} />;
                })}
            </ul>
            <Footer
                activeItems={activeItems}
                completedItems={completedItems}
                allItems={allItems}
            />
        </section>
    );
}
