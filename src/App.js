import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


let id = 0

class App extends React.Component {
  // you will need a place to store your state in this component...
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [{
        task: "get working",
        id: id,
        completed: false
      }],
      todoInput: ""
    }
  }

inputHandler = (event) => {
  this.setState({todoInput: event.target.value})
}

submitTodo = (event) => {
  event.preventDefault();
  let todosCopy = this.state.todos.slice()
  todosCopy.push({
    task: this.state.todoInput,
    id: ++ id,
    completed: false
  })
  this.setState({todos: todosCopy, todoInput: ""})

}
  
  render() {
    return (
      <div className="App-wrapper">
        <ToDoList todoList2={this.state.todos} />
        <TodoForm funTime={this.submitTodo} notFunTime={this.inputHandler} input={this.state.todoInput}/>
      </div>
    );
  }
}

export default App;
