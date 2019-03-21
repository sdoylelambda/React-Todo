import React from 'react';
import Todo from './Todo';

const ToDoList = (prop) => {
    return (
        <div className="todo-list">
        {prop.todoList2.map(todoItem => (
        <Todo todo={todoItem.id} todo={todo} toggleItem={props.toggleItem} />
        ))}
        </div>
    );
};





export default ToDoList;


















// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// import React from 'react';

// const list = [
//     {
//         task: 'Organize Garage',
//         id: 1528817077286,
//         completed: false
//       },
//       {
//         task: 'Bake Cookies',
//         id: 1528817084358,
//         completed: false 
//     },
//     {
//         task: 'Learn React',
//         id: 1528817036057,
//         completed: false 
//     }
// ]

//export default 