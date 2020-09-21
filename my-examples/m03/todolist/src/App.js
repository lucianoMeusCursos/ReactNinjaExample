import React from 'react';
import Form from './components/form';
import TodosList from './components/todos-list';
import Filter from './components/filter';
import SearchCep from './components/search-cep';

// import './App.css';

const App = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', padding: 30}}>
      <div>
        <Form />
        <TodosList />
        <Filter />
      </div>
      <SearchCep />
    </div>
  );
}


export default App;
