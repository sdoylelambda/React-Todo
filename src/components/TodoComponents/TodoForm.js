import React from 'react'

// const TodoForm = (props) => {
//     return (
//         <form onSubmit={props.funTime}>
//             <input onChange={props.notFunTime} value={props.input}>
//             </input>
//             <button type='submit'>Add</button>
//         </form>
//     )
// }

// export default TodoForm;


class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        item: ""
      };
    }
  
    handleChanges = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    submitItem = e => {
      e.preventDefault();
      // take the item off of state
      // send that item to a function defined on App.js
      this.props.addItem(this.state.item);
      // reset the state
      this.setState({ item: "" });
    };
  
    render() {
      return (
        <form onSubmit={this.submitItem}>
          <input
            type="text"
            name="item"
            value={this.state.item}
            onChange={this.handleChanges}
          />
          <button>Add</button>
        </form>
      );
    }
  }

  export default TodoForm;