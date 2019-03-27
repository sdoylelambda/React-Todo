import React from 'react'

const TodoForm = (props) => {
    return (
        <div className="TodoForm">
            <input
                type="text"
                placeholder="Add new todo"
                name="newTask"
                value={props.newTask}
                onChange={props.handleChanges}
                />
                <button onClick={() => props.updateList}>Add TodoForm</button>
                    <button onClick={() => props.clearCompleted}>Clear clearCompleted</button>
        </div>
    );
};
        
export default TodoForm;  