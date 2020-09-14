import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from './../../redux-flow/reducers/todos/actions-creators'

const TodosList = ({ todos, handleToggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={handleToggleTodo(todo.id)}
      >
        {todo.text}
      </li>
    ))}
  </ul>
)

// Mapeando as props utilizadas
const mapStateToProps = (state) => ({
  todos: state.todos
})

// Mapeando as actions utilizadas
const mapDispatchToProps = (dispatch) => ({
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
