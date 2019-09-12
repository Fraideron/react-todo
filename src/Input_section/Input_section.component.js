import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Input_section.component.css';

class InputSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: ''
    }
  }

  sendTodoEvent = (e) => {
    if(e.keyCode === 13){
      const todosTitle  = e.target.value || '';
      this.props.addItem(todosTitle);
      this.setState({todos: ''});
    }
  }

  render() {
    return (
      <div className="InputSection">
        <TextField
          value={this.state.todos}
          label="Type your todo's"
          onChange={(e)=>{this.setState({todos: e.target.value})}}
          onKeyDown={this.sendTodoEvent}
        />       
      </div>
    )
  }
}

export default InputSection;
