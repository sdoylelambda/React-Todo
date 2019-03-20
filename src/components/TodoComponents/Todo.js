import React from 'react';

function Todo(props) {
    return (
        <div className="todo-card">
            <div className="todo-info">
                <h5>{props.todoProp.name}</h5>
                <p>
                    <strong>Task:</strong> {props.todoProp.task} />

                    <div

                </p>
            </div>
        </div>
    )
}



task, id, completed