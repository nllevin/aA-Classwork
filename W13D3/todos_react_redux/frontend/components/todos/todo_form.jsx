import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', body: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.receiveTodo({
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body
    });

    this.setState({
      title: '',
      body: ''
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title" 
          value={ this.state.title }
          onChange={ this.update("title") }  
        />
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          value={ this.state.body }
          onChange={ this.update("body") }
        />
        <button>Add Todo!</button>
      </form>
    );
  }
}

export default TodoForm;