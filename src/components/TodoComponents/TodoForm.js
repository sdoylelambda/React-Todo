import React from 'react'
const TodoForm = (props) => {
    return (
        <form onSubmit={props.funTime}>
            <input onChange={props.notFunTime} value={props.input}>
            </input>
            <button type='submit'>Add</button>
        </form>
    )
}

export default TodoForm;