import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './redux-flow/reducers/todos/actions-creators.js'

// import './App.css';

const App = ({ todos, handleAddTodo, handleToggleTodo }) => {
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type='text' name="todo" />
        <button type="submit">Adicionar</button>
      </form>
      {console.log(todos)}
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

      <div>
        <h3>Mostrar</h3>
        <span>Todos</span> | <a href='#'>Finalizados</a> | <a href='#'>A fazer</a>
      </div>
    </div>
  );
}

// Mapeando as props utilizadas
const mapStateToProps = (state) => ({
  todos: state
})

// Mapeando as actions utilizadas
const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = ''
  },
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);