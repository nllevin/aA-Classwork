import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

export default class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, receiveTodo, createTodo, errors } = this.props;

    return (
      <div>
        <ul>
          { todos.map( (todo, idx) => <TodoListItem key={idx} todo={ todo } />) }
        </ul>
        <TodoForm 
          receiveTodo={receiveTodo}
          createTodo={createTodo}
          errors={errors}
        />
      </div>
    );
  }
}