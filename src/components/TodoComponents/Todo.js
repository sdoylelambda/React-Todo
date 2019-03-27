import React from 'react';

const Todo = (props) => {
   return (
       <div
        className={`todo${props.todo.task ? " finished" : ""}`}
        onClick={() => props.toggleItem(props.todo.id)}
       >
       <p>{props.todo.name}</p>
       </div>
   );
};

export default Todo;