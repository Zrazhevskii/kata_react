import React from 'react';

export default function NewTaskForm() {
    return (
        <header class='header'>
            <h1>todos</h1>
            <input
                class='new-todo'
                placeholder='What needs to be done?'
                autofocus
            />
        </header>
    );
}
