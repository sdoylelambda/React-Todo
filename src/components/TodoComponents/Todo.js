import React from 'react';

const Todo = (props) => {
   return (
   <p>{props.todo.task}</p>
   )
}

export default Todo;









// function Todo(props) {
//     return (
//         <div className="todo-card">
//             <div className="todo-info">
//                 <h5>{props.todoProp.name}</h5>
//                 <p>
//                     <strong>Task:</strong> {props.todoProp.task} />

//                     <div

//                 </p>
//             </div>
//         </div>
//     )
// }



// task, id, completed