import React from 'react';
import Form from './components/form';
import TodosList from './components/todos-list';
import Filter from './components/filter';

// import './App.css';

const App = () => {
  return (
    <div>
      <Form />

      <TodosList />

      <Filter />
    </div>
  );
}


export default App;
