import React from 'react';
import Todo from './Todo';

const ToDoList = (props) => {
    return (
        <div className="todo-list">
            {props.todoList2.map(todoItem => (
                <Todo 
                todo={todoItem.id} 
                todo={todoItem} 
                toggleItem={props.toggleItem} 
            />
            ))}
        </div>
    );
};

export default ToDoList;





